export enum StorageKeys {
  scrobbles = "scrobbles",
  storageStatusInfo = "storageStatusInfo",
}

export const username = "rikishiyayo";
export const recentTracksPageSize = 25;
export const numberOfRecentTrackPagesToDownload = 5;
export const delayBetweenRequestForRecentTracks = 500;

export const getRecentTracksResourceUri = 
  `https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTracks&limit=
  ${recentTracksPageSize}&user=rikishiyayo&from&to&api_key=d3b15cefdfc22c908467b6972ad2f661`;

export const getUserInfoResourceUri = `https://ws.audioscrobbler.com/2.0/?format=json&method=user.getinfo
  &api_key=d3b15cefdfc22c908467b6972ad2f661`;

export const resourceUris = [
  getRecentTracksResourceUri,
  `https://ws.audioscrobbrler.com/2.0/?format=json&method=user.getRecentTracks&limit=200&user=rikishiyayo
    &from&to&api_key=d3b15cefdfc22c908467b6972ad2f661`,
  `https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTracks&limit=200&user=rikishiyayo
    &from&to&api_key=d3fb15cefdfc22c908467b6972ad2f661`,
  `https://ws.audioscrobbler.com/2.0/?format=json&method=user.getRecentTtracks&limit=200&user=rikishiyayo
    &from&to&api_key=d3b15cefdfc22c908467b6972ad2f661`,
];
