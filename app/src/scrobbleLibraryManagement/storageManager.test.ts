import { testScrobbles, testScrobbles2 } from "../files/testScrobbles";
import * as storageManager from "./storageManager";

describe("StorageManager", () => {
  describe("addScrobbles()", () => {
    let testMethodSpy: jest.SpyInstance;

    beforeEach(() => {
      testMethodSpy = jest.spyOn(storageManager, "saveScrobbles");
    });

    test.only("if list of scrobbles is not empty, adds 10 new scrobbles to the end of the list", () => {
      jest.spyOn(storageManager, "getScrobbles").mockImplementation(() => {
        console.log("MOCKED getScrobbles()");
        return testScrobbles;
      });

      storageManager.addScrobbles(testScrobbles2);

      expect(testMethodSpy).toHaveBeenCalledTimes(1);
    });

    test("if list of scrobbles is empty, adds 10 new scrobbles to the list", () => {
      jest.spyOn(storageManager, "getScrobbles").mockImplementation(() => {
        console.log("MOCKED getScrobbles()");
        return [];
      });

      storageManager.addScrobbles(testScrobbles2);

      expect(testMethodSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("isStorageEmpty()", () => {
    test("returns true if the storage is empty", () => {
      expect(storageManager.isStorageEmpty()).toBe(true);
    });

    test("returns false if the storage contains at least 1 scrobble", () => {
      expect(storageManager.isStorageEmpty()).toBe(false);
    });
  });
});
