export class ScrobbledTracks {
  page;
  recentTracks;
  constructor(page, recentTracks) {
    this.page = page;
    this.recentTracks = recentTracks;
  }
}

export class Album {
    id;
    name;
    artist;
    releaseDate; //i guess i need to query musicBrainz, no longer in album.getInfo response from lastFm api
    image; // lastFm unreliable, should get it from somewhere else
    url; // from lastFm album.getInfo
    genres;
    duration;
    constructor(id, name, artist, releaseDate, image, url) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.releaseDate = releaseDate;
        this.image = image;
        this.url = url;
    }
};

export class Artist {
    id;
    name;
    formationDate; // from musicBrainz
    country; // from musicBrainz
    image; // lastFm unreliable, should get it from somewhere else
    url; // from lastFm artist.getInfo
    genres;
    constructor(id, name, country, image, url) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.image = image;
        this.url = url;
    }
};