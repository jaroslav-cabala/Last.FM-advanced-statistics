import { ScrobbledTrack } from "./lastFMApiResponses";

// export class Scrobble extends Track {
//   // date;
//   constructor(id, name, album, artist, url, date) {
//     super(id, name, album, artist, url);
//     this.date = date;
//   }
// }

// export class ScrobbledTracks {
//   constructor(attr, recentTracks) {
//     this.attr = attr;
//     this.recentTracks = recentTracks;
//   }
// }

export class Album {
  mbid: string;
  name: string;
  artist: Artist;
  releaseDate: string;
  image: string;
  url: string;
  // id;
  // name;
  // artist;
  // releaseDate; //i guess i need to query musicBrainz, no longer in album.getInfo response from lastFm api
  // image; // lastFm unreliable, should get it from somewhere else
  // url; // from lastFm album.getInfo
  // genres;
  // duration;
  constructor(mbid: string, name: string, artist: Artist, releaseDate: string, image: string, url: string) {
    this.mbid = mbid;
    this.name = name;
    this.artist = artist;
    this.releaseDate = releaseDate;
    this.image = image;
    this.url = url;
  }
}

export class Artist {
  mbid: string;
  name: string;
  country: string;
  image: string;
  url: string;
  // id;
  // name;
  // formationDate; // from musicBrainz
  // country; // from musicBrainz
  // image; // lastFm unreliable, should get it from somewhere else
  // url; // from lastFm artist.getInfo
  // genres;
  constructor(mbid: string, name: string, country: string, image: string, url: string) {
    this.mbid = mbid;
    this.name = name;
    this.country = country;
    this.image = image;
    this.url = url;
  }
}

export class DownloadInfo {
  pagesDownloaded: number;
  scrobblesDownloaded: number;
  latestDownloadedScrobble: ScrobbledTrack;
  constructor(scrobbles: ScrobbledTrack[]) {
    this.pagesDownloaded = Math.ceil(scrobbles.length / 200);
    this.scrobblesDownloaded = scrobbles.length;
    this.latestDownloadedScrobble = scrobbles[0];
  }
}
