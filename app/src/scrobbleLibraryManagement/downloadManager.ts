import { Subscription } from "rxjs";

import { dump } from "../common";
import { ScrobbledTrack, Scrobbles } from "../models/domain";
import { getScrobbles$, getScrobblesTest$ } from "./downloaders/scrobbles";
import { getStorageStatusInfoJSON } from "./storageManager";

export function downloadScrobbles(
  startPage: number,
  pages: number,
  processScrobbles: (scrobbles: ScrobbledTrack[]) => void
): Subscription {
  return getScrobblesTest$(startPage, pages).subscribe({
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

function extractUnsavedScrobbles(scrobbles: Scrobbles, newScrobblesCount: number): Scrobbles {
  let newScrobbles: Scrobbles = [];

  const storageStatusInfo = getStorageStatusInfoJSON();
  const latestDownloadedScrobble = storageStatusInfo.latestDownloadedScrobble;
  // const downloadedScrobbles = storageStatusInfo.scrobblesDownloaded;

  newScrobbles = scrobbles.slice(0, newScrobblesCount);
  const duplicates = scrobbles.slice(newScrobblesCount);

  let isFirstDroppedScrobbleEqualToLatestStoredScrobble = true;
  if (scrobbles.length !== newScrobblesCount) {
    isFirstDroppedScrobbleEqualToLatestStoredScrobble = ScrobbledTrack.AreScrobblesEqual(
      duplicates[0],
      latestDownloadedScrobble
    );
  }
  const isOldestNewScrobbleDifferentFromDifferentFromLatestStoredScrobble = !ScrobbledTrack.AreScrobblesEqual(
    newScrobbles[newScrobbles.length - 1],
    latestDownloadedScrobble
  );

  if (
    isFirstDroppedScrobbleEqualToLatestStoredScrobble &&
    isOldestNewScrobbleDifferentFromDifferentFromLatestStoredScrobble
  ) {
    console.log("HOORAY, successfully extracted only new unsaved scrobbles!");
    return newScrobbles;
  }

  console.log("OOOPS, something went wrong. Extraction of new unsaved scrobbles failed!");
  dump([
    `Latest downloaded scrobble: `,
    latestDownloadedScrobble,
    `First dropped scrobble: `,
    scrobbles[newScrobblesCount],
    `Oldest new scrobble: `,
    scrobbles[scrobbles.length - 1],
  ]);

  return [];
}
