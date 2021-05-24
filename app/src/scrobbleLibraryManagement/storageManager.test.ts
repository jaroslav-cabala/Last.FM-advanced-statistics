import { testScrobbles, testScrobbles2 } from "../files/testScrobbles";
import { addScrobbles, getScrobblesJSONString, isStorageEmpty } from "./storageManager";

describe("StorageManager", () => {
  describe("addScrobbles()", () => {
    test("if list of scrobbles is not empty, adds 10 new scrobbles to the end of the list", () => {
      addScrobbles(testScrobbles2);
    });

    test("if list of scrobbles is empty, adds 10 new scrobbles to the list", () => {
      addScrobbles(testScrobbles2);
    });
  });

  describe("isStorageEmpty()", () => {
    test("returns true if the storage is empty", () => {
      expect(isStorageEmpty()).toBe(true);
    });

    test("returns false if the storage contains at least 1 scrobble", () => {
      expect(isStorageEmpty()).toBe(false);
    });
  });
});
