import { LastFmAlbum, LastFmArtist, Scrobbles } from "../models/domain";

export const testGetRecentTracksResponseJSONPage1 = `{
  "recenttracks": {
      "@attr": {
          "page": "1",
          "total": "98740",
          "user": "rikishiyayo",
          "perPage": "5",
          "totalPages": "19748"
      },
      "track": [
          {
              "artist": {
                  "mbid": "61fdc79c-df1a-4999-8d2f-668f18c11283",
                  "#text": "Kvelertak"
              },
              "@attr": {
                  "nowplaying": "true"
              },
              "mbid": "4eff0f9b-348d-4365-9280-ad34d67c3f52",
              "album": {
                  "mbid": "48ff1b5f-cbc2-4301-a40f-325cb4f89760",
                  "#text": "Meir"
              },
              "streamable": "0",
              "url": "https://www.last.fm/music/Kvelertak/_/%C3%85penbaring",
              "name": "Åpenbaring",
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  }
              ]
          },
          {
              "artist": {
                  "mbid": "eda0c0a6-c3ce-426d-8f84-e3200bc02693",
                  "#text": "1914"
              },
              "album": {
                  "mbid": "70e5e674-7412-49b3-9532-c389fa64e138",
                  "#text": "The Blind Leading The Blind"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/48886b3a79f45936077e826ef922518d.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/48886b3a79f45936077e826ef922518d.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/48886b3a79f45936077e826ef922518d.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/48886b3a79f45936077e826ef922518d.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623015324",
                  "#text": "06 Jun 2021, 21:35"
              },
              "url": "https://www.last.fm/music/1914/_/C%27est+Mon+Dernier+Pigeon",
              "name": "C'est Mon Dernier Pigeon",
              "mbid": "6e1adb03-7d8f-4508-9c60-fb0ab6513057"
          },
          {
              "artist": {
                  "mbid": "114a7dd2-00bb-4666-a650-367a2fb08b35",
                  "#text": "Aephanemer"
              },
              "album": {
                  "mbid": "1b0cc3f4-2d99-4ec7-af59-dfe2d6f73b2a",
                  "#text": "Memento Mori"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e2ad6b9e531eab118dbb5ca5804a976f.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e2ad6b9e531eab118dbb5ca5804a976f.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e2ad6b9e531eab118dbb5ca5804a976f.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e2ad6b9e531eab118dbb5ca5804a976f.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623015021",
                  "#text": "06 Jun 2021, 21:30"
              },
              "url": "https://www.last.fm/music/Aephanemer/_/Sisyphus+Bliss",
              "name": "Sisyphus Bliss",
              "mbid": "05199f35-5a7f-407b-8657-3d0422149e2b"
          },
          {
              "artist": {
                  "mbid": "b629afc0-2d61-4638-9e49-32bcacf69228",
                  "#text": "Hour of Penance"
              },
              "album": {
                  "mbid": "1bc30f2a-2c69-45b9-9ef6-4b03f4b09fb1",
                  "#text": "Paradogma"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/12d3f30335ab44efc4f4c72abe6481d4.png"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/12d3f30335ab44efc4f4c72abe6481d4.png"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/12d3f30335ab44efc4f4c72abe6481d4.png"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/12d3f30335ab44efc4f4c72abe6481d4.png"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623014761",
                  "#text": "06 Jun 2021, 21:26"
              },
              "url": "https://www.last.fm/music/Hour+of+Penance/_/Paradogma",
              "name": "Paradogma",
              "mbid": "cc595bb1-2c4d-410f-87cc-9d4f6f667f70"
          },
          {
              "artist": {
                  "mbid": "a7d9c5f6-751d-4ea5-bf6d-39f1751d44a1",
                  "#text": "Nails"
              },
              "album": {
                  "mbid": "c20668c5-0a48-4d4b-907a-ad76e5f1cb9d",
                  "#text": "Abandon All Life"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/bd17b22b9db42b22e380bf74b12597b1.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/bd17b22b9db42b22e380bf74b12597b1.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/bd17b22b9db42b22e380bf74b12597b1.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/bd17b22b9db42b22e380bf74b12597b1.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623014511",
                  "#text": "06 Jun 2021, 21:21"
              },
              "url": "https://www.last.fm/music/Nails/_/Tyrant",
              "name": "Tyrant",
              "mbid": "713b24ef-0621-3764-8e0a-ea689444aaa8"
          },
          {
              "artist": {
                  "mbid": "48cb4248-889d-45ed-8462-acb29c002a8d",
                  "#text": "Fleshgod Apocalypse"
              },
              "album": {
                  "mbid": "088beb9f-bf90-4712-b7b9-3eec3f285cab",
                  "#text": "Oracles"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e2485efd78a148839d64bdbfbfb3e3e0.png"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e2485efd78a148839d64bdbfbfb3e3e0.png"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e2485efd78a148839d64bdbfbfb3e3e0.png"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e2485efd78a148839d64bdbfbfb3e3e0.png"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1621378724",
                  "#text": "18 May 2021, 22:58"
              },
              "url": "https://www.last.fm/music/Fleshgod+Apocalypse/_/Sophistic+Demise",
              "name": "Sophistic Demise",
              "mbid": "b3148d9f-76b0-3fb6-beac-7823b4b18b06"
          }
      ]
  }
}`;

export const testGetRecentTracksResponseJSONPage2 = `{
  "recenttracks": {
      "@attr": {
          "page": "2",
          "total": "98740",
          "user": "rikishiyayo",
          "perPage": "5",
          "totalPages": "19748"
      },
      "track": [
          {
              "artist": {
                  "mbid": "48638996-5311-40af-87a7-a1a6c0072944",
                  "#text": "Furia"
              },
              "album": {
                  "mbid": "22702eb6-4c35-45d4-932c-f44309ef98a5",
                  "#text": "Nocel"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/8eb7bc0092f744f3c492ca6d6ac02d65.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/8eb7bc0092f744f3c492ca6d6ac02d65.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/8eb7bc0092f744f3c492ca6d6ac02d65.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/8eb7bc0092f744f3c492ca6d6ac02d65.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623014404",
                  "#text": "06 Jun 2021, 21:20"
              },
              "url": "https://www.last.fm/music/Furia/_/Zamawianie+drugie",
              "name": "Zamawianie drugie",
              "mbid": "7b986361-7ca9-45a7-b0f9-ad972bd1df70"
          },
          {
              "artist": {
                  "mbid": "af2373bf-4b18-4e06-954c-ab83946992c9",
                  "#text": "Full of Hell"
              },
              "album": {
                  "mbid": "982e0117-6d82-443d-b184-e56cb259e99c",
                  "#text": "Trumpeting Ecstasy"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/067a08e30f10c2b3334dfe35e67a6ac0.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/067a08e30f10c2b3334dfe35e67a6ac0.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/067a08e30f10c2b3334dfe35e67a6ac0.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/067a08e30f10c2b3334dfe35e67a6ac0.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623014174",
                  "#text": "06 Jun 2021, 21:16"
              },
              "url": "https://www.last.fm/music/Full+of+Hell/_/The+Cosmic+Vein",
              "name": "The Cosmic Vein",
              "mbid": "07e86f84-1977-4340-9747-8e8c101c3d63"
          },
          {
              "artist": {
                  "mbid": "8d5291bc-e960-428a-9004-b5ab9c171dd2",
                  "#text": "Kalmah"
              },
              "album": {
                  "mbid": "5c69d3e6-76b0-42ab-b438-5e6d9a509f8e",
                  "#text": "For the Revolution"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/77d72d96303a3c8b241fa2c783c4303b.png"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/77d72d96303a3c8b241fa2c783c4303b.png"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/77d72d96303a3c8b241fa2c783c4303b.png"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/77d72d96303a3c8b241fa2c783c4303b.png"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623014041",
                  "#text": "06 Jun 2021, 21:14"
              },
              "url": "https://www.last.fm/music/Kalmah/_/For+the+Revolution",
              "name": "For the Revolution",
              "mbid": "3b114bab-d37b-305c-9419-e3cb7be196f7"
          },
          {
              "artist": {
                  "mbid": "61fdc79c-df1a-4999-8d2f-668f18c11283",
                  "#text": "Kvelertak"
              },
              "album": {
                  "mbid": "48ff1b5f-cbc2-4301-a40f-325cb4f89760",
                  "#text": "Meir"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/db9daf733be8e73bf39f558de56c2ff4.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623013685",
                  "#text": "06 Jun 2021, 21:08"
              },
              "url": "https://www.last.fm/music/Kvelertak/_/%C3%85penbaring",
              "name": "Åpenbaring",
              "mbid": "4eff0f9b-348d-4365-9280-ad34d67c3f52"
          },
          {
              "artist": {
                  "mbid": "37ea73dd-a48c-4659-8b9d-5c77bd9cbd12",
                  "#text": "Deathspell Omega"
              },
              "album": {
                  "mbid": "0af6c6b3-92e3-45d7-8b37-c589bd61281c",
                  "#text": "Paracletus"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e0893f3b967546a48815bc41c424e04e.png"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e0893f3b967546a48815bc41c424e04e.png"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e0893f3b967546a48815bc41c424e04e.png"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e0893f3b967546a48815bc41c424e04e.png"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1623013507",
                  "#text": "06 Jun 2021, 21:05"
              },
              "url": "https://www.last.fm/music/Deathspell+Omega/_/Apokatastasis+Pant%C3%B4n",
              "name": "Apokatastasis Pantôn",
              "mbid": "0e703983-2bbc-4c7f-9821-7877a63e759e"
          }
      ]
  }
}`;

export const testDeserializedScrobblesPage1: Scrobbles = [
  {
    date: "1623015324",
    track: {
      mbid: "6e1adb03-7d8f-4508-9c60-fb0ab6513057",
      name: "C'est Mon Dernier Pigeon",
      url: "https://www.last.fm/music/1914/_/C%27est+Mon+Dernier+Pigeon",
      duration: 44444,
      album: {
        mbid: "70e5e674-7412-49b3-9532-c389fa64e138",
        name: "The Blind Leading The Blind",
        artist: {
          mbid: "eda0c0a6-c3ce-426d-8f84-e3200bc02693",
          name: "1914",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "eda0c0a6-c3ce-426d-8f84-e3200bc02693",
        name: "1914",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
    },
  },
  {
    date: "1623015021",
    track: {
      mbid: "05199f35-5a7f-407b-8657-3d0422149e2b",
      name: "Sisyphus Bliss",
      album: {
        mbid: "1b0cc3f4-2d99-4ec7-af59-dfe2d6f73b2a",
        name: "Memento Mori",
        artist: {
          mbid: "114a7dd2-00bb-4666-a650-367a2fb08b35",
          name: "Aephanemer",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "114a7dd2-00bb-4666-a650-367a2fb08b35",
        name: "Aephanemer",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Aephanemer/_/Sisyphus+Bliss",
      duration: 44444,
    },
  },
  {
    date: "1623014761",
    track: {
      mbid: "cc595bb1-2c4d-410f-87cc-9d4f6f667f70",
      name: "Paradogma",
      album: {
        mbid: "1bc30f2a-2c69-45b9-9ef6-4b03f4b09fb1",
        name: "Paradogma",
        artist: {
          mbid: "b629afc0-2d61-4638-9e49-32bcacf69228",
          name: "Hour of Penance",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "b629afc0-2d61-4638-9e49-32bcacf69228",
        name: "Hour of Penance",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Hour+of+Penance/_/Paradogma",
      duration: 44444,
    },
  },
  {
    date: "1623014511",
    track: {
      mbid: "713b24ef-0621-3764-8e0a-ea689444aaa8",
      name: "Tyrant",
      album: {
        mbid: "c20668c5-0a48-4d4b-907a-ad76e5f1cb9d",
        name: "Abandon All Life",
        artist: {
          mbid: "a7d9c5f6-751d-4ea5-bf6d-39f1751d44a1",
          name: "Nails",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "a7d9c5f6-751d-4ea5-bf6d-39f1751d44a1",
        name: "Nails",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Nails/_/Tyrant",
      duration: 44444,
    },
  },
  {
    date: "1621378724",
    track: {
      mbid: "b3148d9f-76b0-3fb6-beac-7823b4b18b06",
      name: "Sophistic Demise",
      album: {
        mbid: "088beb9f-bf90-4712-b7b9-3eec3f285cab",
        name: "Oracles",
        artist: {
          mbid: "48cb4248-889d-45ed-8462-acb29c002a8d",
          name: "Fleshgod Apocalypse",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "48cb4248-889d-45ed-8462-acb29c002a8d",
        name: "Fleshgod Apocalypse",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Fleshgod+Apocalypse/_/Sophistic+Demise",
      duration: 44444,
    },
  },
];

export const testDeserializedScrobblesPage2: Scrobbles = [
  {
    date: "1623014404",
    track: {
      mbid: "7b986361-7ca9-45a7-b0f9-ad972bd1df70",
      name: "Zamawianie drugie",
      album: {
        mbid: "22702eb6-4c35-45d4-932c-f44309ef98a5",
        name: "Nocel",
        artist: {
          mbid: "48638996-5311-40af-87a7-a1a6c0072944",
          name: "Furia",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "48638996-5311-40af-87a7-a1a6c0072944",
        name: "Furia",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Furia/_/Zamawianie+drugie",
      duration: 44444,
    },
  },
  {
    date: "1623014174",
    track: {
      mbid: "07e86f84-1977-4340-9747-8e8c101c3d63",
      name: "The Cosmic Vein",
      album: {
        mbid: "982e0117-6d82-443d-b184-e56cb259e99c",
        name: "Trumpeting Ecstasy",
        artist: {
          mbid: "af2373bf-4b18-4e06-954c-ab83946992c9",
          name: "Full of Hell",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "af2373bf-4b18-4e06-954c-ab83946992c9",
        name: "Full of Hell",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Full+of+Hell/_/The+Cosmic+Vein",
      duration: 44444,
    },
  },
  {
    date: "1623014041",
    track: {
      mbid: "3b114bab-d37b-305c-9419-e3cb7be196f7",
      name: "For the Revolution",
      album: {
        mbid: "5c69d3e6-76b0-42ab-b438-5e6d9a509f8e",
        name: "For the Revolution",
        artist: {
          mbid: "8d5291bc-e960-428a-9004-b5ab9c171dd2",
          name: "Kalmah",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "8d5291bc-e960-428a-9004-b5ab9c171dd2",
        name: "Kalmah",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Kalmah/_/For+the+Revolution",
      duration: 44444,
    },
  },
  {
    date: "1623013685",
    track: {
      mbid: "4eff0f9b-348d-4365-9280-ad34d67c3f52",
      name: "Åpenbaring",
      album: {
        mbid: "48ff1b5f-cbc2-4301-a40f-325cb4f89760",
        name: "Meir",
        artist: {
          mbid: "61fdc79c-df1a-4999-8d2f-668f18c11283",
          name: "Kvelertak",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "61fdc79c-df1a-4999-8d2f-668f18c11283",
        name: "Kvelertak",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Kvelertak/_/%C3%85penbaring",
      duration: 44444,
    },
  },
  {
    date: "1623013507",
    track: {
      mbid: "0e703983-2bbc-4c7f-9821-7877a63e759e",
      name: "Apokatastasis Pantôn",
      album: {
        mbid: "0af6c6b3-92e3-45d7-8b37-c589bd61281c",
        name: "Paracletus",
        artist: {
          mbid: "37ea73dd-a48c-4659-8b9d-5c77bd9cbd12",
          name: "Deathspell Omega",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "37ea73dd-a48c-4659-8b9d-5c77bd9cbd12",
        name: "Deathspell Omega",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Deathspell+Omega/_/Apokatastasis+Pant%C3%B4n",
      duration: 44444,
    },
  },
];

export const testGetRecentTracksResponseWithSomeAlreadySavedScrobblesJSON = `
{
  "recenttracks": {
      "@attr": {
          "page": "709",
          "total": "98908",
          "user": "rikishiyayo",
          "perPage": "8",
          "totalPages": "12364"
      },
      "track": [
          {
              "artist": {
                  "mbid": "",
                  "#text": "Gojira"
              },
              "@attr": {
                  "nowplaying": "true"
              },
              "mbid": "014b7d61-e8f5-4b94-bd33-92d579f8c10c",
              "album": {
                  "mbid": "02c95026-ba08-48a4-8488-2b3d638383d4",
                  "#text": "From Mars to Sirius"
              },
              "streamable": "0",
              "url": "https://www.last.fm/music/Gojira/_/World+to+Come",
              "name": "World to Come",
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/881cda5e2542fbaa21c99b35e7228960.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/881cda5e2542fbaa21c99b35e7228960.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/881cda5e2542fbaa21c99b35e7228960.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/881cda5e2542fbaa21c99b35e7228960.jpg"
                  }
              ]
          },
          {
              "artist": {
                  "mbid": "68bd8072-0412-44b1-81dd-807aa6c1918c",
                  "#text": "Bolt Thrower"
              },
              "album": {
                  "mbid": "",
                  "#text": "For Victory"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615746720",
                  "#text": "14 Mar 2021, 18:32"
              },
              "url": "https://www.last.fm/music/Bolt+Thrower/_/When+Glory+Beckons",
              "name": "When Glory Beckons",
              "mbid": "08e17abf-bb46-39f1-98fa-a9fa6bf62b8f"
          },
          {
              "artist": {
                  "mbid": "68bd8072-0412-44b1-81dd-807aa6c1918c",
                  "#text": "Bolt Thrower"
              },
              "album": {
                  "mbid": "",
                  "#text": "For Victory"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615746497",
                  "#text": "14 Mar 2021, 18:28"
              },
              "url": "https://www.last.fm/music/Bolt+Thrower/_/Remembrance",
              "name": "Remembrance",
              "mbid": "084ed521-3156-454c-97a5-902e42b9fa2c"
          },
          {
              "artist": {
                  "mbid": "68bd8072-0412-44b1-81dd-807aa6c1918c",
                  "#text": "Bolt Thrower"
              },
              "album": {
                  "mbid": "",
                  "#text": "For Victory"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/eb477dd6d83e4daa9c9ad660ae577d93.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615746420",
                  "#text": "14 Mar 2021, 18:27"
              },
              "url": "https://www.last.fm/music/Bolt+Thrower/_/War",
              "name": "War",
              "mbid": "10c72342-f2af-4851-8a5e-7adac5fe7b68"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "f443d97f-957e-4cf3-8c2a-b8311ccc59f1",
                  "#text": "Besnota"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/61af32e5f121eb7b217b66571b6e54bf.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/61af32e5f121eb7b217b66571b6e54bf.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/61af32e5f121eb7b217b66571b6e54bf.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/61af32e5f121eb7b217b66571b6e54bf.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615743290",
                  "#text": "14 Mar 2021, 17:34"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Jebem+va%C5%A1e+idoly",
              "name": "Jebem vaše idoly",
              "mbid": "4da64b1f-ca5e-4a61-9a36-c437212fc058"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
                  "#text": "Zbojnícky Tanec"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615743063",
                  "#text": "14 Mar 2021, 17:31"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Bastardi+spolo%C4%8Dnosti",
              "name": "Bastardi spoločnosti",
              "mbid": "2a0e7fa5-e535-4a8c-b726-aff5fe0caaca"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
                  "#text": "Zbojnícky Tanec"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615742250",
                  "#text": "14 Mar 2021, 17:17"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
              "name": "Zbojníci Apokalypsy",
              "mbid": "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
                  "#text": "Zbojnícky Tanec"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615741843",
                  "#text": "14 Mar 2021, 17:10"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
              "name": "Zbojníci Apokalypsy",
              "mbid": "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
                  "#text": "Zbojnícky Tanec"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615741543",
                  "#text": "14 Mar 2021, 17:05"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
              "name": "Zbojníci Apokalypsy",
              "mbid": "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3"
          },
          {
              "artist": {
                  "mbid": "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
                  "#text": "Catastrofy"
              },
              "album": {
                  "mbid": "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
                  "#text": "Zbojnícky Tanec"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a0ff5d8cfb64baf554a4656696062b34.jpg"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615741476",
                  "#text": "14 Mar 2021, 17:04"
              },
              "url": "https://www.last.fm/music/Catastrofy/_/Anci%C3%A1%C5%A1a,+zmr%C3%A1ka+sa!",
              "name": "Anciáša, zmráka sa!",
              "mbid": "aeee2b1b-7b87-483f-bb9f-c18870bb7d27"
          },
          {
              "artist": {
                  "mbid": "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
                  "#text": "Carcass"
              },
              "album": {
                  "mbid": "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
                  "#text": "Surgical Steel"
              },
              "image": [
                  {
                      "size": "small",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/8dc6e3d38182c5446b6a04362312c27c.png"
                  },
                  {
                      "size": "medium",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/8dc6e3d38182c5446b6a04362312c27c.png"
                  },
                  {
                      "size": "large",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/8dc6e3d38182c5446b6a04362312c27c.png"
                  },
                  {
                      "size": "extralarge",
                      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/8dc6e3d38182c5446b6a04362312c27c.png"
                  }
              ],
              "streamable": "0",
              "date": {
                  "uts": "1615741192",
                  "#text": "14 Mar 2021, 16:59"
              },
              "url": "https://www.last.fm/music/Carcass/_/Intensive+Battery+Brooding",
              "name": "Intensive Battery Brooding",
              "mbid": "1c214788-3841-467e-8502-ce93e2c82063"
          }
      ]
  }
}`;

export const testDeserializedGetRecentTracksResponseWithSomeAlreadySavedScrobblesJSON: Scrobbles = [
  {
    date: "1615746720",
    track: {
      mbid: "08e17abf-bb46-39f1-98fa-a9fa6bf62b8f",
      name: "When Glory Beckons",
      album: {
        mbid: "",
        name: "For Victory",
        artist: {
          mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
          name: "Bolt Thrower",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
        name: "Bolt Thrower",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Bolt+Thrower/_/When+Glory+Beckons",
      duration: 4444,
    },
  },
  {
    track: {
      mbid: "084ed521-3156-454c-97a5-902e42b9fa2c",
      name: "Remembrance",
      album: {
        mbid: "",
        name: "For Victory",
        artist: {
          mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
          name: "Bolt Thrower",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
        name: "Bolt Thrower",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Bolt+Thrower/_/Remembrance",
      duration: 4444,
    },
    date: "1615746497",
  },
  {
    track: {
      mbid: "10c72342-f2af-4851-8a5e-7adac5fe7b68",
      name: "War",
      album: {
        mbid: "",
        name: "For Victory",
        artist: {
          mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
          name: "Bolt Thrower",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "68bd8072-0412-44b1-81dd-807aa6c1918c",
        name: "Bolt Thrower",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Bolt+Thrower/_/War",
      duration: 4444,
    },
    date: "1615746420",
  },
  {
    track: {
      mbid: "4da64b1f-ca5e-4a61-9a36-c437212fc058",
      name: "Jebem vaše idoly",
      album: {
        mbid: "f443d97f-957e-4cf3-8c2a-b8311ccc59f1",
        name: "Besnota",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Jebem+va%C5%A1e+idoly",
      duration: 4444,
    },
    date: "1615743290",
  },
  {
    date: "1615743063",
    track: {
      mbid: "2a0e7fa5-e535-4a8c-b726-aff5fe0caaca",
      name: "Bastardi spoločnosti",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Bastardi+spolo%C4%8Dnosti",
      duration: 4444,
    },
  },
  {
    date: "1615742250",
    track: {
      mbid: "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3",
      name: "Zbojníci Apokalypsy",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
      duration: 4444,
    },
  },
  {
    date: "1615741843",
    track: {
      mbid: "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3",
      name: "Zbojníci Apokalypsy",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
      duration: 4444,
    },
  },
  {
    date: "1615741543",
    track: {
      mbid: "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3",
      name: "Zbojníci Apokalypsy",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
      duration: 4444,
    },
  },
  {
    date: "1615741476",
    track: {
      mbid: "aeee2b1b-7b87-483f-bb9f-c18870bb7d27",
      name: "Anciáša, zmráka sa!",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Anci%C3%A1%C5%A1a,+zmr%C3%A1ka+sa!",
      duration: 4444,
    },
  },
  {
    date: "1615741192",
    track: {
      mbid: "1c214788-3841-467e-8502-ce93e2c82063",
      name: "Intensive Battery Brooding",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Intensive+Battery+Brooding",
      duration: 4444,
    },
  },
];

export const testSavedScrobbles: Scrobbles = [
  {
    date: "1615741543",
    track: {
      mbid: "6612401f-f5d0-4e4f-9bf7-fcdff8e6d0c3",
      name: "Zbojníci Apokalypsy",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Zbojn%C3%ADci+Apokalypsy",
      duration: 4444,
    },
  },
  {
    date: "1615741476",
    track: {
      mbid: "aeee2b1b-7b87-483f-bb9f-c18870bb7d27",
      name: "Anciáša, zmráka sa!",
      album: {
        mbid: "5c2c775b-5b6d-42d5-9c4b-c7f0008e444d",
        name: "Zbojnícky Tanec",
        artist: {
          mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
          name: "Catastrofy",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "4a069b08-e31c-44c0-94dd-b3b49ed7c0da",
        name: "Catastrofy",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Catastrofy/_/Anci%C3%A1%C5%A1a,+zmr%C3%A1ka+sa!",
      duration: 4444,
    },
  },
  {
    date: "1615741192",
    track: {
      mbid: "1c214788-3841-467e-8502-ce93e2c82063",
      name: "Intensive Battery Brooding",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Intensive+Battery+Brooding",
      duration: 4444,
    },
  },
  {
    date: "1615740678",
    track: {
      mbid: "34def34f-21d6-4ce6-af41-334b7555dcc7",
      name: "Mount Of Execution",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Mount+Of+Execution",
      duration: 4444,
    },
  },
  {
    date: "1615740481",
    track: {
      mbid: "1baef17d-ab72-44da-9b26-df0d770df7e1",
      name: "Captive Bolt Pistol",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Captive+Bolt+Pistol",
      duration: 4444,
    },
  },
  {
    date: "1615740161",
    track: {
      mbid: "04fa6bd7-0303-4f3b-a873-25437952e941",
      name: "316L Grade Surgical Steel",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/316L+Grade+Surgical+Steel",
      duration: 4444,
    },
  },
  {
    date: "1615739821",
    track: {
      mbid: "27d981f7-ea0d-3d8b-98f3-d23bff5ea18f",
      name: "Corporal Jigsore Quandary",
      album: {
        mbid: "12861e13-dce8-41ac-991f-6bcb09e2659c",
        name: "Necroticism: Descanting the Insalubrious",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Corporal+Jigsore+Quandary",
      duration: 4444,
    },
  },
  {
    date: "1615739556",
    track: {
      mbid: "18145c78-d070-4f8f-bfbe-2452b2996fbd",
      name: "Unfit For Human Consumption",
      album: {
        mbid: "05762b6e-a65e-439e-a7a1-a5a66f4a8bd3",
        name: "Surgical Steel",
        artist: {
          mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
          name: "Carcass",
          country: "",
          image: "",
          url: "",
          formationYear: "",
          genres: [],
        },
        releaseDate: "",
        image: "",
        url: "",
      },
      artist: {
        mbid: "d50a4b89-ff1f-4659-9fde-f76f8d5b3c89",
        name: "Carcass",
        country: "",
        image: "",
        url: "",
        formationYear: "",
        genres: [],
      },
      url: "https://www.last.fm/music/Carcass/_/Unfit+For+Human+Consumption",
      duration: 4444,
    },
  },
];

export const testScrobbles: Scrobbles = [
  {
    date: "1621423317",
    track: {
      mbid: "TEST",
      name: "The Forsaking",
      album: {
        mbid: "TESTALBUM",
        name: "Agony",
        artist: {
          mbid: "TESTARTIST",
          name: "Fleshgod Apocalypse",
        } as LastFmArtist,
        releaseDate: "2000",
      } as LastFmAlbum,
      artist: {
        mbid: "TEST",
        name: "Fleshgod Apocalypse",
        country: "Italy",
      } as LastFmArtist,
      url: "rtognrtoignrto",
      duration: 4444,
    },
  },
  {
    date: "1621423019",
    track: {
      mbid: "TEST2",
      name: "Only Pain",
      album: {
        mbid: "TESTALBUM2",
        name: "Magma",
        artist: {
          mbid: "TESTARTIST2",
          name: "Gojira",
        } as LastFmArtist,
        releaseDate: "2015",
      } as LastFmAlbum,
      artist: {
        mbid: "TEST2",
        name: "Gojira",
        country: "France",
      } as LastFmArtist,
      url: "4tporeefr6grt7tgr",
      duration: 4444,
    },
  },
  {
    date: "1621422687",
    track: {
      mbid: "TEST3",
      name: "Empty Words",
      album: {
        mbid: "TESTALBUM3",
        name: "Symbolic",
        artist: {
          mbid: "TESTARTIST3",
          name: "Death",
        } as LastFmArtist,
        releaseDate: "",
      } as LastFmAlbum,
      artist: {
        mbid: "TESTARTIST3",
        name: "Death",
        country: "USA",
      } as LastFmArtist,
      url: "gtr895hgrt84ju8495e",
      duration: 4444,
    },
  },
];

export const testScrobbles2: Scrobbles = [
  {
    date: "1621423317",
    track: {
      mbid: "TEST4",
      name: "Atomb",
      album: {
        mbid: "TESTALBUM4",
        name: "Nuklearth",
        artist: {
          mbid: "TESTARTIST4",
          name: "Cytotoxin",
        } as LastFmArtist,
        releaseDate: "2020",
      } as LastFmAlbum,
      artist: {
        mbid: "TEST4",
        name: "Cytotoxin",
        country: "Germany",
      } as LastFmArtist,
      url: "km65ew56gf65mnjy65gtrerf",
      duration: 4444,
    },
  },
  {
    date: "1621423019",
    track: {
      mbid: "TEST5",
      name: "Naraka",
      album: {
        mbid: "TESTALBUM5",
        name: "Samsara",
        artist: {
          mbid: "TESTARTIST5",
          name: "Venom Prison",
        } as LastFmArtist,
        releaseDate: "2019",
      } as LastFmAlbum,
      artist: {
        mbid: "TEST5",
        name: "Venom Prison",
        country: "United Kingdom",
      } as LastFmArtist,
      url: "bgfvferegrhytjyhyt145gt",
      duration: 4444,
    },
  },
];
