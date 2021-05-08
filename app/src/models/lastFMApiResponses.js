export class Track {
    // id;
    // name;
    // album;
    // artist;
    // url;
    constructor(id, name, album, artist, url) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.artist = artist;
        this.url = url;
    }
};

export class Scrobble extends Track {
    // date;
    constructor(id, name, album, artist, url, date, ) {
        super(id, name, album, artist, url);
        this.date = date;
    }
}

export class Album {
    // mbid;
    // name;
    constructor(mbid, name) {
        this.mbid = mbid;
        this.name = name;
    }
};

export class Artist {
    // mbid;
    // name;
    constructor(mbid, name) {
        this.mbid = mbid;
        this.name = name;
    }
};

export class RecentTracks {
    // attr;
    // tracks;
    constructor(attr, tracks) {
        this.attr = attr;
        this.tracks = tracks;
    }
}