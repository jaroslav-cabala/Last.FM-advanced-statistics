import { get } from "../httpRequest/http.js";
// this is import of default export(you can name it whatever you want, thats why i named it 'myjoin'
// even though it is exported as 'default export join' )
import myjoin from "../../node_modules/lodash-es/join.js";
import { Observable } from "../../node_modules/rxjs/_esm2015/index.js";

const resourceUri =
  "https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTracks&limit=200&user=rikishiyayo&from&to&api_key=d3b15cefdfc22c908467b6972ad2f661";

function getOnePageOfRecentTracks(pageNumber) {
  return get(resourceUri, [{ name: "page", value: pageNumber }])
    .then((response) => response.json())
    .then((data) =>
      console.log(
        `PAGE ${data.recenttracks["@attr"].page} - `,
        data.recenttracks
      )
    );
}
function getScrobbledTracks$(resource) {
  return new Observable(async (observer) => {
    for (let index = 1; index <= 4; index++) {
      await getOnePageOfRecentTracks(index);
    }
  });
}

console.log(
  `Hi, I am starting a process of downloading all scrobbles. It will take a while
  (depending on the amount of scrobbles)...`
);

async function main() {
  try {
    getScrobbledTracks$().subscribe(
      (res) => {
        console.log("observable execution success - ", +res);
      },
      (error) => console.log("observable execution error - " + error)
    );
  } catch (error) {
    console.log(error);
  }
}

main();
