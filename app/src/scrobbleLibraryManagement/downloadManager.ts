import { Subscription } from "rxjs";

import { dump } from "../common";
import { ScrobbledTrack, Scrobbles } from "../models/domain";
import { getScrobbles$, getScrobblesTest$ } from "./downloaders/scrobbles";
import { getStorageStatusInfo } from "./storageManager";

export const downloadScrobbles = function (
  startPage: number,
  pages: number,
  processScrobbles: (scrobbles: Scrobbles) => void
): Subscription {
  return getScrobblesTest$(startPage, pages).subscribe({
    next: processScrobbles,
    error: (err) => dump([`error in getScrobbles$ - ${err}`]),
    complete: () => dump(["getScrobbles$ completed!"]),
  });
};

export const downloadNewScrobbles = function (
  pages: number,
  newScrobblesCount: number,
  processScrobbles: (scrobbles: Scrobbles) => void
): Subscription {
  return getScrobbles$(pages).subscribe({
    next: (scrobbles) => {
      const newScrobbles = extractNewScrobbles(scrobbles, newScrobblesCount);
      processScrobbles(newScrobbles);
    },
    error: (err) => dump([`error in getScrobbles$ - ${err}`]),
    complete: () => dump(["getScrobbles$ completed!"]),
  });
};

export const extractNewScrobbles = function (
  downloadedScrobbles: Scrobbles,
  newScrobblesCount: number
): Scrobbles {
  const newScrobbles = downloadedScrobbles.slice(0, newScrobblesCount);
  const alreadyDownloaded = downloadedScrobbles.slice(newScrobblesCount);

  if (
    verifySuccessfulExtractionOfNewScrobbles(
      newScrobblesCount,
      downloadedScrobbles,
      newScrobbles,
      alreadyDownloaded
    )
  ) {
    console.log("HOORAY, successfully extracted only new unsaved scrobbles!");
    return newScrobbles;
  }

  const storageStatusInfo = getStorageStatusInfo();
  const latestStoredScrobble = storageStatusInfo.latestStoredScrobble;
  console.log("OOOPS, something went wrong. Extraction of new unsaved scrobbles failed!");
  dump([
    "Latest downloaded scrobble: ",
    latestStoredScrobble,
    "First dropped scrobble: ",
    downloadedScrobbles[newScrobblesCount],
    "Oldest new scrobble: ",
    downloadedScrobbles[downloadedScrobbles.length - 1],
  ]);

  return [];
};

const verifySuccessfulExtractionOfNewScrobbles = (
  newScrobblesCount: number,
  allDownloadedScrobbles: Scrobbles,
  newScrobbles: Scrobbles,
  alreadyDownloadedScrobbles: Scrobbles
): boolean => {
  const storageStatusInfo = getStorageStatusInfo();
  const latestStoredScrobble = storageStatusInfo.latestStoredScrobble;

  let isFirstDroppedScrobbleEqualToLatestStoredScrobble = true;
  if (allDownloadedScrobbles.length !== newScrobblesCount) {
    isFirstDroppedScrobbleEqualToLatestStoredScrobble = ScrobbledTrack.AreScrobblesEqual(
      alreadyDownloadedScrobbles[0],
      latestStoredScrobble
    );
  }
  const isOldestNewScrobbleDifferentFromLatestStoredScrobble = !ScrobbledTrack.AreScrobblesEqual(
    newScrobbles[newScrobbles.length - 1],
    latestStoredScrobble
  );

  if (
    isFirstDroppedScrobbleEqualToLatestStoredScrobble &&
    isOldestNewScrobbleDifferentFromLatestStoredScrobble
  ) {
    return true;
  }
  return false;
};
