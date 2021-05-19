import { Subscription } from "rxjs";

import { dump } from "../common";
import { ScrobbledTrack, Scrobbles } from "../models/domain";
import { getScrobbles$ } from "./downloaders/scrobbles";
import { getStorageStatusInfoJSON } from "./storageManager";

export function downloadScrobbles(
  pages: number,
  processScrobbles: (scrobbles: ScrobbledTrack[]) => void
): Subscription {
  return getScrobbles$(pages).subscribe({
    next: processScrobbles,
    error: (err) => dump([`error in getScrobbles$ - ${err}`]),
    complete: () => dump([`getScrobbles$ completed!`]),
  });
}

export function downloadNewScrobbles(
  pages: number,
  newScrobblesCount: number,
  processScrobbles: (scrobbles: Scrobbles) => void
): Subscription {
  return getScrobbles$(pages).subscribe({
    next: (scrobbles) => {
      const newScrobbles = extractUnsavedScrobbles(scrobbles, newScrobblesCount);
      processScrobbles(newScrobbles);
    },
    error: (err) => dump([`error in getScrobbles$ - ${err}`]),
    complete: () => dump([`getScrobbles$ completed!`]),
  });
}

function getNumberOfPagesToDownload(): number {
  return 1;
}

function extractUnsavedScrobbles(scrobbles: Scrobbles, newScrobbles: number): Scrobbles {
  let result: Scrobbles = [];

  const storageStatusInfo = getStorageStatusInfoJSON();
  const latestDownloadedScrobble = storageStatusInfo.latestDownloadedScrobble;
  // const downloadedScrobbles = storageStatusInfo.scrobblesDownloaded;

  result = scrobbles.slice(newScrobbles - 1);

  const isFirstDroppedScrobbleEqualToLatestStoredScrobble = ScrobbledTrack.AreScrobblesEqual(
    scrobbles[newScrobbles],
    latestDownloadedScrobble
  );
  const isOldestNewScrobbleDifferentFromDifferentFromLatestStoredScrobble = !ScrobbledTrack.AreScrobblesEqual(
    scrobbles[scrobbles.length - 1],
    latestDownloadedScrobble
  );
  if (
    isFirstDroppedScrobbleEqualToLatestStoredScrobble &&
    isOldestNewScrobbleDifferentFromDifferentFromLatestStoredScrobble
  ) {
    console.log("HOORAY, successfully extracted only new unsaved scrobbles!");
    return result;
  }

  console.log("OOOPS, something went wrong. Extraction of new unsaved scrobbles failed!");
  dump([
    `Latest downloaded scrobble: `,
    latestDownloadedScrobble,
    `First dropped scrobble: `,
    scrobbles[newScrobbles],
    `Oldest new scrobble: `,
    scrobbles[scrobbles.length - 1],
  ]);

  return [];
}
