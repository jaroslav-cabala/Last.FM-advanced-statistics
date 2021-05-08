import { EMPTY, from, defer, range } from "../../node_modules/rxjs/_esm2015/index.js";
import {
  catchError,
  concatMap,
  map,
  reduce,
  delay,
  retryWhen,
  tap
} from "../../node_modules/rxjs/_esm2015/internal/operators/index.js";

import { get } from "../httpRequest/http.js";
import { deserializeGetRecentTracksResponse } from "../scrobblesDownloader/deserializer.js";
import { RecentTracks } from "../models/lastFMApiResponses.js";
import { dump, getCurrentTimeString } from "../common.js";

const resourceUri =
  "https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTracks&limit=200&user=rikishiyayo&from&to&api_key=d3b15cefdfc22c908467b6972ad2f661";

function getOnePageOfRecentTracks$(pageNumber) {
  dump(`${getCurrentTimeString()} - Getting ${pageNumber}. page of scrobbles`);

  const promise = get(resourceUri, [{ name: "page", value: pageNumber }]);
  return defer(() => from(promise)).pipe(
    concatMap((response) => response.json()),
    map((data) => new RecentTracks(data.recenttracks["@attr"], data.recenttracks.track)),
    // tap(() => dump(`${getCurrentTimeString()} - ${pageNumber}. page of scrobbles obtained!`)), // does not work :(
    retryWhen(() => {
      let retryCount = 1;
      return range(1, 3).pipe(
        concatMap((val) => of(1).pipe(delay(val * 2000))),
        tap(() => dump(`${dumpCurrentTime()} - retrying ${retryCount++}. time...`))
      );
    }),
    delay(3000),
  );
}

export function getScrobbles$(numberOfRequestToBeSent) {
  return range(1, numberOfRequestToBeSent).pipe(
    concatMap((page) => getOnePageOfRecentTracks$(page)),
    catchError(() => EMPTY),
    map((recentTracks) => deserializeGetRecentTracksResponse(recentTracks)),
    reduce((accumulatorArray, currentValue) => accumulatorArray.concat(currentValue))
  );
}
