import { EMPTY, from, defer, range } from "../../node_modules/rxjs/_esm2015/index.js";
import {
  catchError,
  concatMap,
  map,
  reduce,
  delay,
  retryWhen,
  retry,
  tap,
} from "../../node_modules/rxjs/_esm2015/internal/operators/index.js";

import { get } from "../httpRequest/http.js";
import { deserializeGetRecentTracksResponse } from "../scrobblesDownloader/deserializer.js";
import { RecentTracks } from "../models/lastFMApiResponses.js";
import { dump, getCurrentTimeString, retryStrategy } from "../common.js";
import { resourceUri, resourceUris } from "../appConfiguration.js";

function getOnePageOfRecentTracks$(pageNumber) {
  dump(`${getCurrentTimeString()} - getting ${pageNumber}. page of scrobbles`);

  const random = Math.floor(Math.random() * 4);

  const promise = get(resourceUris[random], [{ name: "page", value: pageNumber }]);
  return defer(() => from(get(resourceUris[random], [{ name: "page", value: pageNumber }]))).pipe(
    concatMap(async (response) => {
      if (response.ok) {
        return response.json();
      }
      console.log(`Status: ${response.status}, StatusText: ${response.statusText}`);
      const { message } = await response.json();
      throw new Error(message);
    }),
    map((data) => new RecentTracks(data.recenttracks["@attr"], data.recenttracks.track)),
    tap({
      next: () => dump(`${getCurrentTimeString()} - ${pageNumber}. page of scrobbles obtained!`),
    }),
    retryWhen(retryStrategy({ maxTryAttemps: 3, retryDelay: () => 1500 })),
    // retry(3),
    delay(2000)
  );
}

export function getScrobbles$(numberOfRequestToBeSent) {
  return range(1, numberOfRequestToBeSent).pipe(
    concatMap((page) => getOnePageOfRecentTracks$(page)),
    catchError((error) => {
      dump(`${getCurrentTimeString()} - Could not get all scrobbles!\nError: ${error.message}`);
      return EMPTY;
    }),
    // catchError(() => EMPTY),
    map((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
    reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
  );
}
