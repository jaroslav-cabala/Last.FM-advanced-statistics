export interface RecentTracks {
  attr: Attr;
  tracks: ScrobbledTrack[];
}

export interface Attr {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  user: string;
}

export interface Album {
  mbid: string;
  text: string;
}

export interface Artist {
  mbid: string;
  text: string;
}

export class ScrobbledTrack {
  mbid: string;
  name: string;
  album: Album;
  artist: Artist;
  url: string;
  date: string;
  constructor(mbid: string, name: string, album: Album, artist: Artist, url: string, date: string) {
    this.mbid = mbid;
    this.name = name;
    this.album = album;
    this.artist = artist;
    this.url = url;
    this.date = date;
  }
}
