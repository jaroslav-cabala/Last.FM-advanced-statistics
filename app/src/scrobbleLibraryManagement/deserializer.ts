import { IArtist, IRelease } from "musicbrainz-api";
import {
  LastFmArtist,
  LastFmAlbum,
  Scrobble,
  ArtistDetails,
  AlbumDetails,
  LastFmTrack,
} from "../models/domain";
import { RecentTracks, Track } from "../models/lastFMApiResponses";

export const deserializeArtistDetails = function (artist: IArtist): ArtistDetails {
  return {
    country: artist.country ?? "",
    formationYear: artist["life-span"]?.begin ?? "",
  };
};

export const deserializeAlbumDetails = function (release: IRelease): AlbumDetails {
  return {
    releaseDate: release.date,
  };
};

/*
 * Deserializes an array of scrobbled tracks - from array of json object to array of object of type Scrobble.
 */
export const deserializeGetRecentTracksResponse = function (recentTracks: RecentTracks): Scrobble[] {
  return getScrobbleRecords(recentTracks.track);
};

const getScrobbleRecords = function (tracks: Track[]): Scrobble[] {
  const result: Scrobble[] = [];
  for (const track of tracks) {
    if (!!track.date && !(track["@attr"]?.nowplaying === "true")) {
      result.push(createScrobbleRecord(track));
    }
  }

  return result;
};

const createScrobbleRecord = function (track: Track): Scrobble {
  const lastFmArtist = new LastFmArtist(track.artist.mbid, track.artist["#text"]);
  const lastfmAlbum = new LastFmAlbum(track.album.mbid, track.album["#text"], lastFmArtist);
  const lastFmTrack = new LastFmTrack(track.mbid, track.name, lastfmAlbum, lastFmArtist, track.url, 44444);
  const scrobble = new Scrobble(<string>track.date?.uts, lastFmTrack);

  return scrobble;
};
