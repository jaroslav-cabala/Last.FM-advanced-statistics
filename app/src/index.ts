import { dump } from "./common";
import { Scrobbles, User } from "./models/domain";
import * as DownloadManager from "./scrobbleLibraryManagement/downloadManager";
import * as StorageManager from "./scrobbleLibraryManagement/storageManager";
import { numberOfRecentTrackPagesToDownload, recentTracksPageSize, username } from "./appConfiguration";
import { getUserInfo } from "./scrobbleLibraryManagement/downloaders/userInfo";
import { deserializeGetRecentTracksResponse } from "./scrobbleLibraryManagement/deserializer";
import { GetRecentTracksResponse, RecentTracks } from "./models/lastFMApiResponses";

let user: User;
StorageManager.clearStorage();

const userInfo = async function () {
  try {
    user = await getUserInfo(username);
    updateLocalStorageStatus();
  } catch (error) {
    dump(["Downloading user info from last.fm failed! Error: ", error]);
  }
};

// dump downloaded scrobbles and storage info
const button = document.querySelector("#btnDumpDownloadedScrobbles");
button?.addEventListener("click", function () {
  const scrobbles = JSON.parse(
    StorageManager.getScrobblesJSON() || '{ "Error": "property \'scrobbles\' not found in localStorage" }'
  );
  const storageStatusInfo =
    StorageManager.getStorageStatusInfo().readFriendlyString ||
    "Error: property storageStatusInfo not found in localStorage";
  dump(["scrobbles: ", scrobbles, "storageStatusInfo: ", storageStatusInfo]);

  const textArea = <Element>document.querySelector("#textArea");
  textArea.textContent = JSON.stringify(scrobbles);
});

// download scrobbles
const button2 = document.querySelector("#btnDownloadScrobbles");
button2?.addEventListener("click", () => {
  startDownloadingScrobbles();
});

const startDownloadingScrobbles = async function (): Promise<void> {
  await userInfo();
  if (StorageManager.isStorageEmpty()) {
    DownloadManager.downloadScrobbles(4, numberOfRecentTrackPagesToDownload, processScrobbles);
  } else {
    const downloadedScrobbles = StorageManager.getStorageStatusInfo().scrobblesDownloaded;
    const pagesToDownload = Math.ceil((user.totalScrobbles - downloadedScrobbles) / recentTracksPageSize);

    if (pagesToDownload > 0) {
      dump([
        `Last.fm contains ${
          user.totalScrobbles - downloadedScrobbles
        } scrobbles that are not downloaded yet. Downloading now...`,
      ]);
      DownloadManager.downloadNewScrobbles(
        pagesToDownload,
        user.totalScrobbles - downloadedScrobbles,
        processNewScrobbles
      );
    } else {
      dump(["All scrobbles from Last.fm are downloaded!"]);
    }
  }
};

const processScrobbles = function (scrobbles: Scrobbles) {
  dump(["Downloaded scrobbles: ", scrobbles.length]);
  StorageManager.saveScrobbles(scrobbles);
  StorageManager.saveStorageStatusInfo(scrobbles, user.totalScrobbles - 3 * recentTracksPageSize);

  const localStorageContent = <Element>document.querySelector("#localStorageContent");
  localStorageContent.textContent = StorageManager.getStorageStatusInfo().readFriendlyString;

  const downloadedScrobbles = JSON.parse(
    StorageManager.getScrobblesJSON() || '{ "Error": "property \'scrobbles\' not found in localStorage" }'
  );
  const textArea = <Element>document.querySelector("#textArea");
  textArea.textContent = JSON.stringify(downloadedScrobbles);
};

const processNewScrobbles = function (scrobbles: Scrobbles) {
  dump(["Downloaded new scrobbles: ", scrobbles.length]);
  StorageManager.addScrobbles(scrobbles);

  const currentScrobblesDownloadedCount = StorageManager.getStorageStatusInfo().scrobblesDownloaded;
  StorageManager.saveStorageStatusInfo(scrobbles, currentScrobblesDownloadedCount + scrobbles.length);

  const localStorageContent = <Element>document.querySelector("#localStorageContent");
  localStorageContent.textContent = StorageManager.getStorageStatusInfo().readFriendlyString;

  const downloadedScrobbles = JSON.parse(
    StorageManager.getScrobblesJSON() || '{ "Error": "property \'scrobbles\' not found in localStorage" }'
  );
  const textArea = <Element>document.querySelector("#textArea");
  textArea.textContent = JSON.stringify(downloadedScrobbles);
};

// Local storage status
const button3 = document.querySelector("#btnUpdateStatus");
button3?.addEventListener("click", async function () {
  await userInfo();
  updateLocalStorageStatus();
});

const updateLocalStorageStatus = function () {
  const downloadedScrobbles = StorageManager.getStorageStatusInfo()?.scrobblesDownloaded;
  const span = <Element>document.querySelector("#spanStatus");

  if (!downloadedScrobbles) {
    span.textContent = "Local storage is empty. Download scrobbles from Last.fm!";
  } else if (user.totalScrobbles - downloadedScrobbles > 0) {
    span.textContent = `Local storage out of date! ${
      user.totalScrobbles - downloadedScrobbles
    } new scrobbles on Last.fm`;
  } else {
    span.textContent = "Local storage contains all scrobbles from Last.fm!";
  }
};

//deserialize getRecentTracksResponse to Scrobbles
const deserializeBtn = document.querySelector("#btnDeserializeToScrobbles");
deserializeBtn?.addEventListener("click", () => {
  const el = <HTMLTextAreaElement>document.getElementById("textAreaRecentTracksResponseJSON");
  const text = el.value;
  const getRecentTracksResponse: GetRecentTracksResponse = JSON.parse(text as string);
  const recentTracks: RecentTracks = {
    "@attr": getRecentTracksResponse.recenttracks["@attr"],
    track: getRecentTracksResponse.recenttracks.track,
  };
  const result = deserializeGetRecentTracksResponse(recentTracks);
  dump(result);
});

userInfo();
