import { getDateStringFromUts } from "../common";

export type Scrobbles = ScrobbledTrack[];
export class ScrobbledTrack {
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly album: Album,
    public readonly artist: Artist,
    public readonly url: string,
    public readonly date: string
  ) {}

  static AreScrobblesEqual(scrobble1: ScrobbledTrack, scrobble2: ScrobbledTrack) {
    return (
      scrobble1.date === scrobble2.date &&
      scrobble1.name === scrobble2.name &&
      scrobble1.mbid === scrobble2.mbid &&
      Album.AreAlbumsEqual(scrobble1.album, scrobble2.album) &&
      Artist.AreArtistsEqual(scrobble1.artist, scrobble2.artist)
    );
  }
}

export class Album {
  // releaseDate; //i guess i need to query musicBrainz, no longer in album.getInfo response from lastFm api
  // image; // lastFm unreliable, should get it from somewhere else
  // url; // from lastFm album.getInfo
  // genres;
  // duration;
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly artist: Artist,
    public readonly releaseDate: string = "",
    public readonly image: string = "",
    public readonly url: string = ""
  ) {}

  static AreAlbumsEqual(album1: Album, album2: Album) {
    return album1.mbid === album2.mbid && album1.name === album2.name;
  }
}

export class Artist {
  // formationDate; // from musicBrainz
  // country; // from musicBrainz
  // image; // lastFm unreliable, should get it from somewhere else
  // url; // from lastFm artist.getInfo
  // genres;
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly country: string = "",
    public readonly image: string = "",
    public readonly url: string = ""
  ) {}

  static AreArtistsEqual(artist1: Artist, artist2: Artist) {
    return artist1.mbid === artist2.mbid && artist1.name === artist2.name;
  }
}

export class LocalStorageInfo {
  public readonly pagesDownloaded: number;
  public readonly scrobblesDownloaded: number;
  public readonly latestDownloadedScrobble: ScrobbledTrack;
  public readonly readFriendlyString: string;
  constructor(scrobbles: ScrobbledTrack[], downloadedScrobbles: number) {
    this.pagesDownloaded = Math.ceil(scrobbles.length / 200);
    this.scrobblesDownloaded = downloadedScrobbles;
    // this.scrobblesDownloaded = scrobbles.length;
    this.latestDownloadedScrobble = scrobbles[0];
    this.readFriendlyString = `Pages downloaded: ${this.pagesDownloaded},
      Scrobbles downloaded: ${this.scrobblesDownloaded},
      Latest downloaded scrobble: ${getDateStringFromUts(this.latestDownloadedScrobble.date)}`;
  }
}

export class User {
  constructor(
    public readonly name: string,
    public readonly totalScrobbles: number,
    public readonly url: string
  ) {}
}
