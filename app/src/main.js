import { getScrobbles$ } from "../src/scrobblesDownloader/scrobblesDownloader.js";

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
    (depending on the amount of scrobbles)...`
);

async function main() {
  //   try {
  //     getRecentTracks$(1).subscribe({
  //       next(res) {
  //         console.log("observable subscription - ", res);
  //       },
  //       error(error) {
  //         console.log("observable execution error - " + error);
  //       },
  //       complete() {
  //         console.log("Observable completed!");
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   const scrobbledTracks = [];
  //   let result = [];

  //   getRecentTracks$(1).subscribe({
  //     next(data) {
  //       scrobbledTracks.push(data);
  //     },
  //     complete() {
  //       result = deserializeGetRecentTracksResponse(scrobbledTracks);

  //     },
  //   });

  getScrobbles$(2).subscribe({
    next(scrobbles) {
      console.table(scrobbles);
    },
  });
}

main();
