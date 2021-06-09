import {
  testDeserializedGetRecentTracksResponseWithSomeAlreadySavedScrobblesJSON,
  testDeserializedScrobblesPage1,
  testSavedScrobbles,
} from "../files/testScrobbles";
import * as downloadManager from "./downloadManager";
import * as storageManager from "./storageManager";

describe("DownloadManager", () => {
  describe("extractNewScrobbles()", () => {
    test(`when new scrobbles is 7 and downloaded scrobbles contains some already stored scrobbles,
          returns array of only those new 7 scrobbles`, () => {
      jest.spyOn(storageManager, "getStorageStatusInfo").mockImplementation(() => ({
        latestStoredScrobble: testSavedScrobbles[0],
        pagesDownloaded: 10,
        readFriendlyString: "",
        scrobblesDownloaded: testSavedScrobbles.length,
      }));

      const actual = downloadManager.extractNewScrobbles(
        testDeserializedGetRecentTracksResponseWithSomeAlreadySavedScrobblesJSON,
        7
      );

      const expected = testDeserializedGetRecentTracksResponseWithSomeAlreadySavedScrobblesJSON.slice(0, 7);

      expect(actual).toEqual(expected);
    });

    test(`when new scrobbles is 5 and downloaded scrobbles contains only new scrobbles,
          returns array of new scrobbles equal to array of downloaded scrobbles`, () => {
      jest.spyOn(storageManager, "getStorageStatusInfo").mockImplementation(() => ({
        latestStoredScrobble: testSavedScrobbles[0],
        pagesDownloaded: 10,
        readFriendlyString: "",
        scrobblesDownloaded: testSavedScrobbles.length,
      }));

      const actual = downloadManager.extractNewScrobbles(
        testDeserializedScrobblesPage1,
        testDeserializedScrobblesPage1.length
      );

      const expected = testDeserializedScrobblesPage1;

      expect(actual).toEqual(expected);
    });
  });
});
