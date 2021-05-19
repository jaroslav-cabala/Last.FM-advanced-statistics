export class ScrobbledTrack {
  constructor(
    public readonly mbid: string,
    public readonly name: string,
    public readonly album: Album,
    public readonly artist: Artist,
    public readonly url: string,
    public readonly date: string
  ) {}
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
}

export class DownloadInfo {
  public readonly pagesDownloaded: number;
  public readonly scrobblesDownloaded: number;
  public readonly latestDownloadedScrobble: ScrobbledTrack;
  constructor(scrobbles: ScrobbledTrack[]) {
    this.pagesDownloaded = Math.ceil(scrobbles.length / 200);
    this.scrobblesDownloaded = scrobbles.length;
    this.latestDownloadedScrobble = scrobbles[0];
  }
}
