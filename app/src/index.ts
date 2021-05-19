import { getScrobbles$ } from "./scrobblesDownloader/scrobblesDownloader.js";
import { dump } from "./common.js";
import { DownloadInfo, ScrobbledTrack } from "./models/domain.js";
import { Subscription } from "rxjs";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

localStorage.removeItem("scrobbles");
localStorage.removeItem("downloadInfo");

function downloadScrobbles(): Subscription {
  return getScrobbles$(2).subscribe({
    next: processScrobbles,
    error: (err) => dump([`error in getScrobbles$ - ${err}`]),
    complete: () => dump([`getScrobbles$ completed!`]),
  });
}

function processScrobbles(scrobbles: ScrobbledTrack[]) {
  // console.table(scrobbles);
  dump(["Downloaded scrobbles: ", scrobbles.length]);
  localStorage.setItem("scrobbles", JSON.stringify(scrobbles));
  localStorage.setItem("downloadInfo", JSON.stringify(new DownloadInfo(scrobbles)));
}

var button = document.querySelector("#btnDumpDownloadedScrobbles");
button?.addEventListener("click", function () {
  const scrobbles = JSON.parse(
    localStorage.getItem("scrobbles") || `{ "Error": "property 'scrobbles' not found in localStorage" }`
  );
  const downloadInfo = JSON.parse(
    localStorage.getItem("downloadInfo") || `{ "Error": "property downloadInfo not found in localStorage" }`
  );
  dump(["scrobbles: ", scrobbles, "downloadInfo: ", downloadInfo]);

  var textArea = <Element>document.querySelector("#textArea");
  textArea.textContent = JSON.stringify(scrobbles);
});

var button = document.querySelector("#btnDownloadScrobbles");
button?.addEventListener("click", () => downloadScrobbles());
