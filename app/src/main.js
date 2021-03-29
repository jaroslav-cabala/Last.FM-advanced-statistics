import { getScrobbles$ } from "../src/scrobblesDownloader/scrobblesDownloader.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

getScrobbles$(1).subscribe({
  next(scrobbles) {
    console.table(scrobbles);
  },
});
