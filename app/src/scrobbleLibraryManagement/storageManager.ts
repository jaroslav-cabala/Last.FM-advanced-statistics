import { StorageKeys } from "../appConfiguration";
import { LocalStorageInfo, Scrobbles } from "../models/domain";

export function saveScrobbles(scrobbles: Scrobbles): void {
  localStorage.setItem(StorageKeys.scrobbles, JSON.stringify(scrobbles));
}

export function getScrobblesJSONString(): string | null {
  return localStorage.getItem(StorageKeys.scrobbles);
}

export function getScrobblesJSON(): Scrobbles {
  return JSON.parse(<string>localStorage.getItem(StorageKeys.scrobbles));
}

export function saveStorageStatusInfo(scrobbles: Scrobbles, downloadedScrobbles: number): void {
  const storageStatusInfo = new LocalStorageInfo(scrobbles, downloadedScrobbles);
  localStorage.setItem(StorageKeys.storageStatusInfo, storageStatusInfo.ToString());
}

export function getStorageStatusInfoJSONString(): string | null {
  return localStorage.getItem(StorageKeys.storageStatusInfo);
}

export function getStorageStatusInfoJSON(): LocalStorageInfo {
  return JSON.parse(<string>localStorage.getItem(StorageKeys.storageStatusInfo));
}

export function removeItem(itemKey: string): void {
  localStorage.removeItem(itemKey);
}

export function clearStorage(): void {
  localStorage.clear();
}

export function addScrobbles(scrobbles: Scrobbles): void {
  const existingScrobblesString = getScrobblesJSONString();

  if (existingScrobblesString) {
    const existingScrobbles: Scrobbles = JSON.parse(existingScrobblesString);
    existingScrobbles.unshift(...scrobbles);
    saveScrobbles(existingScrobbles);
  } else {
    saveScrobbles(scrobbles);
  }
}

export function isStorageEmpty(): boolean {
  return !getScrobblesJSONString();
}
