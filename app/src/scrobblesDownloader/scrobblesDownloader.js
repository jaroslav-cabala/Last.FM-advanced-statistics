import { get } from "../httpRequest/http.js";
import { Observable } from "../../node_modules/rxjs/_esm2015/index.js";
import { deserializeGetRecentTracksResponse } from "../scrobblesDownloader/deserializer.js";
import {
  map,
  reduce,
} from "../../node_modules/rxjs/_esm2015/internal/operators/index.js";

const resourceUri =
  "https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTracks&limit=200&user=rikishiyayo&from&to&api_key=d3b15cefdfc22c908467b6972ad2f661";

async function getOnePageOfRecentTracks(pageNumber) {
  const response = await get(resourceUri, [
    { name: "page", value: pageNumber },
  ]);
  console.log(`got page ${pageNumber} of recent tracks from last.fm`);
  return response.json();
}

function getRecentTracks$(numberOfRequestToBeSent) {
  return new Observable(async (observer) => {
    let request = 1;
    let errorCount = 0;
    while (request <= numberOfRequestToBeSent) {
      try {
        const data = await getOnePageOfRecentTracks(request);
        observer.next(data);

        request++;
        errorCount = 0;
      } catch (error) {
        if (errorCount > 3) {
          observer.error(
            `ERROR: getting scrobbled tracks failed multiple times!\n Original error: ${error}`
          );
        } else {
          errorCount++;
          console.log(`${error}\n
          Trying again...`);
        }
      }
    }
    observer.complete();
  });
}

export function getScrobbles$(numberOfRequestToBeSent) {
  return getRecentTracks$(numberOfRequestToBeSent).pipe(
    map((scrobbles) => deserializeGetRecentTracksResponse(scrobbles)),
    reduce((accumulatorArray, currentValue) =>
      accumulatorArray.concat(currentValue)
    )
  );
}
