import { dump } from "./common";
import { Scrobbles, User } from "./models/domain";
import { downloadNewScrobbles, downloadScrobbles } from "./scrobbleLibraryManagement/downloadManager";
import {
  addScrobbles,
  clearStorage,
  getScrobblesJSONString,
  getStorageStatusInfoJSON,
  getStorageStatusInfoJSONString,
  isStorageEmpty,
  saveScrobbles,
  saveStorageStatusInfo,
} from "./scrobbleLibraryManagement/storageManager";
import { testScrobbles } from "./files/testScrobbles";
import { numberOfRecentTrackPagesToDownload, recentTracksPageSize, username } from "./appConfiguration";
import { getUserInfo } from "./scrobbleLibraryManagement/downloaders/userInfo";

let user: User;
clearStorage();
userInfo();

async function userInfo() {
  user = await getUserInfo(username);
}

var button = document.querySelector("#btnDumpDownloadedScrobbles");
button?.addEventListener("click", function () {
  const scrobbles = JSON.parse(
    getScrobblesJSONString() || `{ "Error": "property 'scrobbles' not found in localStorage" }`
  );
  const storageStatusInfo =
    getStorageStatusInfoJSONString() || "Error: property storageStatusInfo not found in localStorage";
  dump(["scrobbles: ", scrobbles, "storageStatusInfo: ", storageStatusInfo]);

  var textArea = <Element>document.querySelector("#textArea");
  textArea.textContent = JSON.stringify(scrobbles);
});

var button = document.querySelector("#btnDownloadScrobbles");
button?.addEventListener("click", () => {
  startDownloadingScrobbles();
});

async function startDownloadingScrobbles(): Promise<void> {
  if (isStorageEmpty()) {
    downloadScrobbles(numberOfRecentTrackPagesToDownload, processScrobbles);
  } else {
    const downloadedScrobbles = getStorageStatusInfoJSON().scrobblesDownloaded;
    const pagesToDownload = Math.ceil((user.totalScrobbles - downloadedScrobbles) / recentTracksPageSize);

    downloadNewScrobbles(pagesToDownload, user.totalScrobbles - downloadedScrobbles, processNewScrobbles);
  }
}

function processScrobbles(scrobbles: Scrobbles) {
  dump(["Downloaded scrobbles: ", scrobbles.length]);
  saveScrobbles(scrobbles);
  saveStorageStatusInfo(scrobbles, user.totalScrobbles);

  var localStorageContent = <Element>document.querySelector("#localStorageContent");
  localStorageContent.textContent = getStorageStatusInfoJSONString();
}

function processNewScrobbles(scrobbles: Scrobbles) {
  dump(["Downloaded new scrobbles: ", scrobbles.length]);
  addScrobbles(scrobbles);
  // saveStorageStatusInfo(scrobbles, user.totalScrobbles);

  var localStorageContent = <Element>document.querySelector("#localStorageContent");
  localStorageContent.textContent = getStorageStatusInfoJSONString();
}

var button = document.querySelector("#testUpdating");
button?.addEventListener("click", function () {
  addScrobbles(testScrobbles);
});
