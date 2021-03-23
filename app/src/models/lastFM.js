export class Track {
    id;
    name;
    album;
    artist;
    url;
    constructor(id, name, album, artist, url) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.artist = artist;
        this.url = url;
    }
};

export class Scrobble extends Track {
    date;
    constructor(id, name, album, artist, url, date, ) {
        super(id, name, album, artist, url);
        this.date = date;
    }
}

export class Album {
    id;
    name;
    artist;
    year;
    image;
    url;
    constructor(id, name, artist, year, image, url) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.image = image;
        this.url = url;
    }
};

export class Artist {
    id;
    name;
    artist;
    country;
    image;
    url;
    constructor(id, name, country, image, url) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.image = image;
        this.url = url;
    }
};

export class RecentTracks {
    attr;
    tracks;
    constructor(attr, tracks) {
        this.attr = attr;
        this.tracks = tracks;
    }
}