import { dump } from "./common";
import { Scrobbles, User } from "./models/domain";
import * as DownloadManager from "./scrobbleLibraryManagement/downloadManager";
import * as StorageManager from "./scrobbleLibraryManagement/storageManager";
import { testScrobbles } from "./files/testScrobbles";
import { numberOfRecentTrackPagesToDownload, recentTracksPageSize, username } from "./appConfiguration";
import { getUserInfo } from "./scrobbleLibraryManagement/downloaders/userInfo";

let user: User;
StorageManager.clearStorage();
userInfo();

async function userInfo() {
	try {
		user = await getUserInfo(username);
		updateLocalStorageStatus();
	} catch (error) {
		dump(["Downloading user info from last.fm failed! Error: ", error]);
	}
}

// dump downloaded scrobbles and storage info
var button = document.querySelector("#btnDumpDownloadedScrobbles");
button?.addEventListener("click", function () {
	const scrobbles = JSON.parse(
		StorageManager.getScrobblesJSONString() || "{ \"Error\": \"property 'scrobbles' not found in localStorage\" }"
	);
	const storageStatusInfo =
    StorageManager.getStorageStatusInfoJSON().readFriendlyString ||
    "Error: property storageStatusInfo not found in localStorage";
	dump(["scrobbles: ", scrobbles, "storageStatusInfo: ", storageStatusInfo]);

	const textArea = <Element>document.querySelector("#textArea");
	textArea.textContent = JSON.stringify(scrobbles);
});

// download scrobbles
var button = document.querySelector("#btnDownloadScrobbles");
button?.addEventListener("click", () => {
	startDownloadingScrobbles();
});

async function startDownloadingScrobbles(): Promise<void> {
	await userInfo();
	if (StorageManager.isStorageEmpty()) {
		DownloadManager.downloadScrobbles(4, numberOfRecentTrackPagesToDownload, processScrobbles);
	} else {
		const downloadedScrobbles = StorageManager.getStorageStatusInfoJSON().scrobblesDownloaded;
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
}

function processScrobbles(scrobbles: Scrobbles) {
	dump(["Downloaded scrobbles: ", scrobbles.length]);
	StorageManager.saveScrobbles(scrobbles);
	StorageManager.saveStorageStatusInfo(scrobbles, user.totalScrobbles - 3 * recentTracksPageSize);

	const localStorageContent = <Element>document.querySelector("#localStorageContent");
	localStorageContent.textContent = StorageManager.getStorageStatusInfoJSON().readFriendlyString;

	const downloadedScrobbles = JSON.parse(
		StorageManager.getScrobblesJSONString() || "{ \"Error\": \"property 'scrobbles' not found in localStorage\" }"
	);
	const textArea = <Element>document.querySelector("#textArea");
	textArea.textContent = JSON.stringify(downloadedScrobbles);
}

function processNewScrobbles(scrobbles: Scrobbles) {
	dump(["Downloaded new scrobbles: ", scrobbles.length]);
	StorageManager.addScrobbles(scrobbles);

	const currentScrobblesDownloadedCount = StorageManager.getStorageStatusInfoJSON().scrobblesDownloaded;
	StorageManager.saveStorageStatusInfo(scrobbles, currentScrobblesDownloadedCount + scrobbles.length);

	const localStorageContent = <Element>document.querySelector("#localStorageContent");
	localStorageContent.textContent = StorageManager.getStorageStatusInfoJSON().readFriendlyString;

	const downloadedScrobbles = JSON.parse(
		StorageManager.getScrobblesJSONString() || "{ \"Error\": \"property 'scrobbles' not found in localStorage\" }"
	);
	const textArea = <Element>document.querySelector("#textArea");
	textArea.textContent = JSON.stringify(downloadedScrobbles);
}

// Local storage status
var button = document.querySelector("#btnUpdateStatus");
button?.addEventListener("click", async function () {
	await userInfo();
	updateLocalStorageStatus();
});

var button = document.querySelector("#testUpdating");
button?.addEventListener("click", function () {
	StorageManager.addScrobbles(testScrobbles);
});

function updateLocalStorageStatus() {
	const downloadedScrobbles = StorageManager.getStorageStatusInfoJSON()?.scrobblesDownloaded;
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
}
