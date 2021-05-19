import { EMPTY, from, defer, range, Observable } from "rxjs";
import { catchError, concatMap, map, reduce, delay, retryWhen, tap } from "rxjs/operators";

import { get } from "../httpRequest/http.js";
import { deserializeGetRecentTracksResponse } from "./deserializer.js";
import { dump, findPageNumber, retryStrategy } from "../common.js";
import { resourceUri, resourceUris } from "../appConfiguration.js";
import { GetRecentTracksResponse, RecentTracks } from "../models/lastFMApiResponses.js";
import { ScrobbledTrack } from "../models/domain.js";

export function getScrobbles$(numberOfRequestToBeSent: number): Observable<ScrobbledTrack[]> {
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

  const random = Math.floor(Math.random() * 4);

  return defer(() => from(get(resourceUri, [{ name: "page", value: pageNumber.toString() }]))).pipe(
    concatMap(inspectFetchResponse),
    map((data: GetRecentTracksResponse) => ({
      "@attr": data.recenttracks["@attr"],
      track: data.recenttracks.track,
    })),
    tap({
      next: () => dump([`${pageNumber}. page of scrobbles obtained!`]),
    }),
    retryWhen(retryStrategy()),
    delay(500)
  );
}

/*
 * Looks at a fetch response. If the response is not OK(status code 200, 2**), throws an error.
 * If it is OK, returns a Promise that resolves to the response content in json
 */
const inspectFetchResponse = async (response: Response): Promise<any> => {
  if (response.ok) {
    return response.json();
  }

  const { message } = await response.json();
  dump([`Getting ${findPageNumber(response.url)}. page failed: `, response.status, message]);
  throw new Error(message);
};
