import { StorageKeys } from "../appConfiguration";
import { LocalStorageInfo, Scrobbles } from "../models/domain";

export const saveScrobbles = function(scrobbles: Scrobbles): void {
  console.log("ORIGINAL saveScrobbles()");
  localStorage.setItem(StorageKeys.scrobbles, JSON.stringify(scrobbles));
};

export const getScrobblesJSONString = function(): string | null {
  return localStorage.getItem(StorageKeys.scrobbles);
};

export const getScrobbles = function(): Scrobbles {
  console.log("ORIGINAL getScrobbles()");
  const scrobblesJSON = getScrobblesJSONString();

  if (scrobblesJSON) {
    return JSON.parse(scrobblesJSON);
  }
  return [];
};

export const saveStorageStatusInfo = function(scrobbles: Scrobbles, downloadedScrobbles: number): void {
  const storageStatusInfo = new LocalStorageInfo(scrobbles, downloadedScrobbles);
  localStorage.setItem(StorageKeys.storageStatusInfo, JSON.stringify(storageStatusInfo));
};

export const updateStorageStatusInfo = function(scrobbles: Scrobbles, downloadedScrobbles: number): void {
  const storageStatusInfo = new LocalStorageInfo(scrobbles, downloadedScrobbles);
  localStorage.setItem(StorageKeys.storageStatusInfo, JSON.stringify(storageStatusInfo));
};

export const getStorageStatusInfoJSON = function(): LocalStorageInfo {
  return JSON.parse(<string>localStorage.getItem(StorageKeys.storageStatusInfo));
};

export const removeItem = function(itemKey: string): void {
  localStorage.removeItem(itemKey);
};

export const clearStorage = function(): void {
  localStorage.clear();
};

export const addScrobbles = function(scrobbles: Scrobbles): void {
  const existingScrobbles = getScrobbles();
  existingScrobbles.unshift(...scrobbles);
  saveScrobbles(existingScrobbles);
};

export const isStorageEmpty = function(): boolean {
  return !getScrobblesJSONString();
};
