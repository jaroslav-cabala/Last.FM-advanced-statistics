import { getScrobbles$ } from "./scrobblesDownloader/scrobblesDownloader.js";
import { getCurrentTimeString } from "./common.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

const c = getScrobbles$(2).subscribe({
  next: (scrobbles) => console.table(scrobbles),
  error: (err) => console.log(`error in getScrobbles$ - ${err}`),
  complete: () => console.log(`${getCurrentTimeString()} - getScrobbles$ completed!`),
});

// setTimeout(() => {
//   c.unsubscribe();
// }, 5000);
