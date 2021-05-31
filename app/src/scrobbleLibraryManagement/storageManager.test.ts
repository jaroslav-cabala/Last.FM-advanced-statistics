import { StorageKeys } from "../appConfiguration";
import { testScrobbles, testScrobbles2 } from "../files/testScrobbles";
import * as storageManager from "./storageManager";

describe("StorageManager", () => {
  describe("addScrobbles()", () => {
    let testMethodSpy: jest.SpyInstance;

    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
      testMethodSpy = jest.spyOn(storageManager, "saveScrobbles").mockName("saveScrobblesSpy");
    });

    test("if list of scrobbles is not empty, inserts 10 new scrobbles at the start of the list", () => {
      jest.spyOn(storageManager, "getScrobbles").mockImplementation(() => {
        console.log("MOCKED getScrobbles()");
        return testScrobbles;
      });

      storageManager.addScrobbles(testScrobbles2);
      const expected = testScrobbles2.concat(testScrobbles);

      expect(testMethodSpy).toHaveBeenCalledTimes(1);
      expect(testMethodSpy).toHaveBeenCalledWith(testScrobbles2.concat(testScrobbles));
    });

    test("if list of scrobbles is empty, adds 10 new scrobbles to the list", () => {
      jest.spyOn(storageManager, "getScrobbles").mockImplementation(() => {
        console.log("MOCKED getScrobbles()");
        return [];
      });

      storageManager.addScrobbles(testScrobbles2);

      expect(testMethodSpy).toHaveBeenCalledTimes(1);
      expect(testMethodSpy).toHaveBeenCalledWith(testScrobbles2);
    });
  });

  describe("isStorageEmpty()", () => {
    test("returns true if the storage is empty", () => {
      expect(storageManager.isStorageEmpty()).toBe(true);
    });

    test("returns false if the storage contains at least 1 scrobble", () => {
      localStorage.setItem(StorageKeys.scrobbles, "");
      expect(storageManager.isStorageEmpty()).toBe(false);
    });
  });

  describe("getScrobbles()", () => {
    test("returns an array of scrobbles if there are any saved", () => {
      jest.spyOn(storageManager, "getScrobblesJSONString").mockImplementation(() => {
        return JSON.stringify(testScrobbles);
      });

      const actual = storageManager.getScrobbles();

      expect(actual).toEqual(testScrobbles);
    });

    test("returns an empty array if there are no saved scrobbles", () => {
      jest.spyOn(storageManager, "getScrobblesJSONString").mockImplementation(() => null);

      const actual = storageManager.getScrobbles();

      expect(actual).toEqual([]);
    });
  });
});
