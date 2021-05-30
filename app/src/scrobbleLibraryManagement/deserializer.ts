import { Artist, Album, ScrobbledTrack } from "../models/domain";
import { RecentTracks, Track } from "../models/lastFMApiResponses";

/*
 * Deserializes an array of scrobbled tracks - from array of json object to array of object of type Scrobble.
 */
export function deserializeGetRecentTracksResponse(recentTracks: RecentTracks): ScrobbledTrack[] {
  return getScrobbleRecords(recentTracks.track);
}

function getScrobbleRecords(tracks: Track[]): ScrobbledTrack[] {
  const result: ScrobbledTrack[] = [];
  for (const track of tracks) {
    if (!!track.date && !(track["@attr"]?.nowplaying === "true")) {
      result.push(createScrobbleRecord(track));
    }
  }

  return result;
}

function createScrobbleRecord(track: Track): ScrobbledTrack {
  const artist = new Artist(track.artist.mbid, track.artist["#text"]);
  const album = new Album(track.album.mbid, track.album["#text"], artist);
  const scrobble = new ScrobbledTrack(
    track.mbid,
    track.name,
    album,
    artist,
    track.url,
    <string>track.date?.uts
  );

  return scrobble;
}
