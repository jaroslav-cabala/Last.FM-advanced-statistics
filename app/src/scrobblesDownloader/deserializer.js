import { Scrobble, ScrobbledTracks, Artist, Album } from "../models/domain.js";

/*
 * Deserializes an array of scrobbled tracks - from array of json object to array of object of type Scrobble.
 */
export function deserializeGetRecentTracksResponse(recentTracks) {
  const scrobbledTracks = new ScrobbledTracks(recentTracks.attr, recentTracks.tracks);

  return getScrobbleRecords(scrobbledTracks.recentTracks);
}

function getScrobbleRecords(scrobbledTracks) {
  const result = [];
  for (const track of scrobbledTracks) {
    if (!(track["@attr"]?.nowplaying === "true") && !!track.date) {
      result.push(createScrobbleRecord(track));
    }
  }

  return result;
}

function createScrobbleRecord(scrobbledTrack) {
  const artist = new Artist(scrobbledTrack.artist.mbid, scrobbledTrack.artist["#text"]);
  const album = new Album(scrobbledTrack.album.mbid, scrobbledTrack.album["#text"], artist);
  const scrobble = new Scrobble(
    scrobbledTrack.mbid,
    scrobbledTrack.name,
    album,
    artist,
    scrobbledTrack.url,
    scrobbledTrack?.date?.uts
  );

  return scrobble;
}
