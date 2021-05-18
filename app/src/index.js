import { getScrobbles$ } from "./scrobblesDownloader/scrobblesDownloader.js";
import { dump } from "./common.js";
import { DownloadInfo } from "./models/domain.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

localStorage.removeItem("scrobbles");
localStorage.removeItem("downloadInfo");

const c = getScrobbles$(2).subscribe({
  next: processScrobbles,
  error: (err) => dump([`error in getScrobbles$ - ${err}`]),
  complete: () => dump([`getScrobbles$ completed!`]),
});

function processScrobbles(scrobbles) {
  // console.table(scrobbles);
  dump(["Downloaded scrobbles: ", scrobbles.length]);
  localStorage.setItem("scrobbles", JSON.stringify(scrobbles));
  localStorage.setItem("downloadInfo", JSON.stringify(new DownloadInfo(scrobbles)));
}

var button = document.querySelector("#btnGetScrobbles");
button.addEventListener("click", function () {
  dump([
    "scrobbles: ",
    JSON.parse(localStorage.getItem("scrobbles")),
    "downloadInfo: ",
    JSON.parse(localStorage.getItem("downloadInfo")),
  ]);
});
