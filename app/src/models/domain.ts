import { getDateStringFromUts } from "../common";

export type Scrobbles = Scrobble[];
export class Scrobble {
  constructor(public readonly date: string, public readonly track: LastFmTrack) {}

  static AreScrobblesEqual(scrobble1: Scrobble, scrobble2: Scrobble): boolean {
    return (
      scrobble1.date === scrobble2.date &&
      LastFmTrack.AreTracksEqual(scrobble1.track, scrobble2.track) &&
      LastFmAlbum.AreAlbumsEqual(scrobble1.track.album, scrobble2.track.album) &&
      LastFmArtist.AreArtistsEqual(scrobble1.track.artist, scrobble2.track.artist)
    );
  }
}

export class LastFmTrack {
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly album: LastFmAlbum,
    public readonly artist: LastFmArtist,
    public readonly url: string,
    public readonly duration: number
  ) {}

  static AreTracksEqual(track1: LastFmTrack, track2: LastFmTrack): boolean {
    return (
      track1.name === track2.name &&
      track1.mbid === track2.mbid &&
      track1.duration === track2.duration &&
      LastFmAlbum.AreAlbumsEqual(track1.album, track2.album) &&
      LastFmArtist.AreArtistsEqual(track1.artist, track2.artist)
    );
  }
}

export class LastFmAlbum {
  // genres;
  // duration;
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly artist: LastFmArtist,
    public readonly releaseDate: string = "",
    public readonly image: string = "",
    public readonly url: string = ""
  ) {}

  static AreAlbumsEqual(album1: LastFmAlbum, album2: LastFmAlbum): boolean {
    return (
      album1.mbid === album2.mbid &&
      album1.name === album2.name &&
      album1.releaseDate == album2.releaseDate &&
      LastFmArtist.AreArtistsEqual(album1.artist, album2.artist)
    );
  }
}

export class LastFmArtist {
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly country: string = "",
    public readonly formationYear = "",
    public readonly image: string = "",
    public readonly url: string = "",
    public readonly genres: string[] = []
  ) {}

  static AreArtistsEqual(artist1: LastFmArtist, artist2: LastFmArtist): boolean {
    return (
      artist1.mbid === artist2.mbid &&
      artist1.name === artist2.name &&
      artist1.country === artist2.country &&
      artist1.formationYear === artist2.formationYear
    );
  }
}

export class LocalStorageInfo {
  public readonly pagesDownloaded: number;
  public readonly scrobblesDownloaded: number;
  public readonly latestStoredScrobble: Scrobble;
  public readonly readFriendlyString: string;
  constructor(scrobbles: Scrobble[], downloadedScrobbles: number) {
    this.pagesDownloaded = Math.ceil(scrobbles.length / 200);
    this.scrobblesDownloaded = downloadedScrobbles;
    // this.scrobblesDownloaded = scrobbles.length;
    this.latestStoredScrobble = scrobbles[0];
    this.readFriendlyString = `Pages downloaded: ${this.pagesDownloaded},
      Scrobbles downloaded: ${this.scrobblesDownloaded},
      Latest downloaded scrobble: ${getDateStringFromUts(this.latestStoredScrobble.date)}`;
  }
}

export class User {
  constructor(
    public readonly name: string,
    public readonly totalScrobbles: number,
    public readonly url: string
  ) {}
}

export interface ArtistDetails {
  country: string;
  formationYear: string;
}

export interface AlbumDetails {
  releaseDate: string;
}
