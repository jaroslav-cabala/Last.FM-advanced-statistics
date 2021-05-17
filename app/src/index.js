import { getScrobbles$ } from "./scrobblesDownloader/scrobblesDownloader.js";
import { dump } from "./common.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

const c = getScrobbles$(2).subscribe({
  next: (scrobbles) => console.table(scrobbles),
  error: (err) => dump([`error in getScrobbles$ - ${err}`]),
  complete: () => dump([`getScrobbles$ completed!`]),
});
