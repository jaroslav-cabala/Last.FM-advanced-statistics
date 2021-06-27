export interface MusicBrainzArtist {
  id: string;
  name: string;
  country: string;
  "life-span": {
    ended: boolean;
    begin: string;
    end: string;
  };
}
