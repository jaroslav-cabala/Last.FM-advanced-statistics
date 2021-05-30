import { EMPTY, from, defer, range, Observable } from "rxjs";
import { catchError, concatMap, map, reduce, delay, retryWhen, tap } from "rxjs/operators";

import { get, inspectFetchResponse } from "../../httpRequest/http";
import { deserializeGetRecentTracksResponse } from "../deserializer";
import { dump, retryStrategy } from "../../common";
import { delayBetweenRequestForRecentTracks, getRecentTracksResourceUri } from "../../appConfiguration";
import { GetRecentTracksResponse, RecentTracks } from "../../models/lastFMApiResponses";
import { Scrobbles } from "../../models/domain";

export function getScrobbles$(numberOfRequestToBeSent: number): Observable<Scrobbles> {
  return range(1, numberOfRequestToBeSent).pipe(
    concatMap((page) => getOnePageOfRecentTracks$(page)),
    catchError((error) => {
      dump([`Could not get all scrobbles!\nError: ${error.message}`]);
      return EMPTY;
    }),
    map((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
    reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
  );
}

function getOnePageOfRecentTracks$(pageNumber: number): Observable<RecentTracks> {
  dump([`Getting ${pageNumber}. page of scrobbles`]);

  // const random = Math.floor(Math.random() * 4);

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
}

export function getScrobblesTest$(startPage: number, numberOfRequestToBeSent: number): Observable<Scrobbles> {
  return range(startPage, numberOfRequestToBeSent).pipe(
    concatMap((page) => getOnePageOfRecentTracks$(page)),
    catchError((error) => {
      dump([`Could not get all scrobbles!\nError: ${error.message}`]);
      return EMPTY;
    }),
    map((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
    reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
  );
}
