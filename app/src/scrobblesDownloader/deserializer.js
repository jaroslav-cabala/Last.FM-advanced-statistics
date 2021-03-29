import { Scrobble } from "../models/lastFMApiResponses.js";
import { ScrobbledTracks, Artist, Album } from "../models/domain.js";

export function deserializeGetRecentTracksResponse(serializedScrobbledTracks) {
  const scrobbledTracks = new ScrobbledTracks(
    serializedScrobbledTracks.recenttracks["@attr"].page,
    serializedScrobbledTracks.recenttracks
  );

  return getScrobbleRecords(scrobbledTracks.recentTracks.track);
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
