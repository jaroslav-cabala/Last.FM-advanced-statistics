export interface GetRecentTracksResponse {
  recenttracks: RecentTracks;
}

export interface GetUserInfoResponse {
  user: UserInfo;
}

export interface UserInfo {
  name: string;
  playcount: number;
  url: string;
}

export interface RecentTracks {
  "@attr": Attr;
  track: Track[];
}

export interface Attr {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  user: string;
}

export interface Track {
  "@attr"?: { nowplaying: string };
  mbid: string;
  name: string;
  album: Album;
  artist: Artist;
  url: string;
  date?: { uts: string; "#text": string };
}

export interface Album {
  mbid: string;
  "#text": string;
}

export interface Artist {
  mbid: string;
  "#text": string;
}
