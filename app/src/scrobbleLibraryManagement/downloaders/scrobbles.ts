import { EMPTY, from, defer, range, Observable } from "rxjs";
import { catchError, concatMap, map, reduce, delay, retryWhen, tap } from "rxjs/operators";

import { get, inspectFetchResponse } from "../../httpRequest/http";
import { deserializeGetRecentTracksResponse } from "../deserializer";
import { dump, RecentTracksDownloadFailedException, retryStrategy } from "../../common";
import { delayBetweenRequestForRecentTracks, getRecentTracksResourceUri } from "../../appConfiguration";
import { GetRecentTracksResponse, RecentTracks } from "../../models/lastFMApiResponses";
import { Scrobbles } from "../../models/domain";

export const getScrobbles$ = function(numberOfRequestToBeSent: number): Observable<Scrobbles> {
  return range(1, numberOfRequestToBeSent).pipe(
    concatMap<number, Observable<RecentTracks>>((page) => getOnePageOfRecentTracks$(page)),
    catchError((error) => {
      dump([`Could not download all scrobbles!\nError: ${error.message}`]);
      throw new RecentTracksDownloadFailedException(error.message);
    }),
    map<RecentTracks, Scrobbles>((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
    reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
  );
};

const getOnePageOfRecentTracks$ = function(pageNumber: number): Observable<RecentTracks> {
  dump([`Getting ${pageNumber}. page of scrobbles`]);

  return defer(() =>
    from(get(getRecentTracksResourceUri, [{ name: "page", value: pageNumber.toString() }]))
  ).pipe(
    concatMap(inspectFetchResponse),
    map<GetRecentTracksResponse, RecentTracks>((data: GetRecentTracksResponse) => ({
      "@attr": data.recenttracks["@attr"],
      track: data.recenttracks.track,
    })),
    tap({
      next: () => dump([`${pageNumber}. page of scrobbles obtained!`]),
    }),
    retryWhen(retryStrategy()),
    delay(delayBetweenRequestForRecentTracks)
  );
};

export const getScrobblesTest$ =
  function(startPage: number, numberOfRequestToBeSent: number): Observable<Scrobbles> {
    return range(startPage, numberOfRequestToBeSent).pipe(
      concatMap((page) => getOnePageOfRecentTracks$(page)),
      catchError((error) => {
        dump([`Could not get all scrobbles!\nError: ${error.message}`]);
        return EMPTY;
      }),
      map((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
      reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
    );
  };
