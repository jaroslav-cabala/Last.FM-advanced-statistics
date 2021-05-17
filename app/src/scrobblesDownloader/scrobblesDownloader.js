import { EMPTY, from, defer, range } from "../../node_modules/rxjs/_esm2015/index.js";
import {
  catchError,
  concatMap,
  map,
  reduce,
  delay,
  retryWhen,
  tap,
} from "../../node_modules/rxjs/_esm2015/internal/operators/index.js";

import { get } from "../httpRequest/http.js";
import { deserializeGetRecentTracksResponse } from "../scrobblesDownloader/deserializer.js";
import { RecentTracks } from "../models/lastFMApiResponses.js";
import { dump, findPageNumber, retryStrategy } from "../common.js";
import { resourceUri, resourceUris } from "../appConfiguration.js";

export function getScrobbles$(numberOfRequestToBeSent) {
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

function getOnePageOfRecentTracks$(pageNumber) {
  dump([`Getting ${pageNumber}. page of scrobbles`]);

  const random = Math.floor(Math.random() * 4);

  return defer(() => from(get(resourceUri, [{ name: "page", value: pageNumber }]))).pipe(
    concatMap(inspectFetchResponse),
    map((data) => new RecentTracks(data.recenttracks["@attr"], data.recenttracks.track)),
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
const inspectFetchResponse = async (response) => {
  if (response.ok) {
    return response.json();
  }

  const { message } = await response.json();
  dump([`Getting ${findPageNumber(response.url)}. page failed: `, response.status, message]);
  throw new Error(message);
};
