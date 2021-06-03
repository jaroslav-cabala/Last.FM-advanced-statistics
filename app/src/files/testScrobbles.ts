import { Album, Artist, Scrobbles } from "../models/domain";

export const testScrobbles: Scrobbles = [
  {
    mbid: "TEST",
    name: "The Forsaking",
    album: {
      mbid: "TESTALBUM",
      name: "Agony",
      artist: {
        mbid: "TESTARTIST",
        name: "Fleshgod Apocalypse",
      } as Artist,
      releaseDate: "2000",
    } as Album,
    artist: {
      mbid: "TEST",
      name: "Fleshgod Apocalypse",
      country: "Italy",
    } as Artist,
    url: "rtognrtoignrto",
    date: "1621423317",
  },
  {
    mbid: "TEST2",
    name: "Only Pain",
    album: {
      mbid: "TESTALBUM2",
      name: "Magma",
      artist: {
        mbid: "TESTARTIST2",
        name: "Gojira",
      } as Artist,
      releaseDate: "2015",
    } as Album,
    artist: {
      mbid: "TEST2",
      name: "Gojira",
      country: "France",
    } as Artist,
    url: "4tporeefr6grt7tgr",
    date: "1621423019",
  },
  {
    mbid: "TEST3",
    name: "Empty Words",
    album: {
      mbid: "TESTALBUM3",
      name: "Symbolic",
      artist: {
        mbid: "TESTARTIST3",
        name: "Death",
      } as Artist,
      releaseDate: "",
    } as Album,
    artist: {
      mbid: "TESTARTIST3",
      name: "Death",
      country: "USA",
    } as Artist,
    url: "gtr895hgrt84ju8495e",
    date: "1621422687",
  },
];

export const testScrobbles2: Scrobbles = [
  {
    mbid: "TEST4",
    name: "Atomb",
    album: {
      mbid: "TESTALBUM4",
      name: "Nuklearth",
      artist: {
        mbid: "TESTARTIST4",
        name: "Cytotoxin",
      } as Artist,
      releaseDate: "2020",
    } as Album,
    artist: {
      mbid: "TEST4",
      name: "Cytotoxin",
      country: "Germany",
    } as Artist,
    url: "km65ew56gf65mnjy65gtrerf",
    date: "1621423317",
  },
  {
    mbid: "TEST5",
    name: "Naraka",
    album: {
      mbid: "TESTALBUM5",
      name: "Samsara",
      artist: {
        mbid: "TESTARTIST5",
        name: "Venom Prison",
      } as Artist,
      releaseDate: "2019",
    } as Album,
    artist: {
      mbid: "TEST5",
      name: "Venom Prison",
      country: "United Kingdom",
    } as Artist,
    url: "bgfvferegrhytjyhyt145gt",
    date: "1621423019",
  }
];
