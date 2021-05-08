import { Scrobble } from "../models/lastFMApiResponses.js";
import { ScrobbledTracks, Artist, Album } from "../models/domain.js";

/*
 * deserializes an array of scrobbled tracks - from array of json object to array of object of type Scrobble
 */
export function deserializeGetRecentTracksResponse(recentTracks) {
  const scrobbledTracks = new ScrobbledTracks(
    recentTracks.attr.page,
    recentTracks.tracks
  );

  return getScrobbleRecords(scrobbledTracks.recentTracks);
}

function createScrobbleRecord(scrobbledTrack) {
  const artist = new Artist(
    scrobbledTrack.artist.id,
    scrobbledTrack.artist["#text"]
  );
  const album = new Album(
    scrobbledTrack.album.mbid,
    scrobbledTrack.album["#text"],
    artist,
    
  );
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

function getScrobbleRecords(scrobbledTracks) {
  const result = [];
  for (const track of scrobbledTracks) {
    result.push(createScrobbleRecord(track));
  }

  return result;
}
