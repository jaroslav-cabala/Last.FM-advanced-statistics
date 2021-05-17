import { getScrobbles$ } from "./scrobblesDownloader/scrobblesDownloader.js";
import { dump } from "./common.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

const c = getScrobbles$(1).subscribe({
  next: processScrobbles,
  error: (err) => dump([`error in getScrobbles$ - ${err}`]),
  complete: () => dump([`getScrobbles$ completed!`]),
});

function processScrobbles(scrobbles) {
  // console.table(scrobbles);
  localStorage.setItem("scrobbles", JSON.stringify(scrobbles));
}

var button = document.querySelector("#btnGetScrobbles");
button.addEventListener("click", function () {
  dump(JSON.parse(localStorage.getItem("scrobbles")));
});
