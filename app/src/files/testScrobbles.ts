import { Album, Artist, Scrobbles } from "../models/domain";

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
    mbid: "6e1adb03-7d8f-4508-9c60-fb0ab6513057",
    name: "C'est Mon Dernier Pigeon",
    album: {
      mbid: "70e5e674-7412-49b3-9532-c389fa64e138",
      name: "The Blind Leading The Blind",
      artist: {
        mbid: "eda0c0a6-c3ce-426d-8f84-e3200bc02693",
        name: "1914",
        country: "",
        image: "",
        url: "",
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
    },
    url: "https://www.last.fm/music/1914/_/C%27est+Mon+Dernier+Pigeon",
    date: "1623015324",
  },
  {
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
    },
    url: "https://www.last.fm/music/Aephanemer/_/Sisyphus+Bliss",
    date: "1623015021",
  },
  {
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
    },
    url: "https://www.last.fm/music/Hour+of+Penance/_/Paradogma",
    date: "1623014761",
  },
  {
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
    },
    url: "https://www.last.fm/music/Nails/_/Tyrant",
    date: "1623014511",
  },
  {
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
    },
    url: "https://www.last.fm/music/Fleshgod+Apocalypse/_/Sophistic+Demise",
    date: "1621378724",
  },
];

export const testDeserializedScrobblesPage2: Scrobbles = [
  {
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
    },
    url: "https://www.last.fm/music/Furia/_/Zamawianie+drugie",
    date: "1623014404",
  },
  {
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
    },
    url: "https://www.last.fm/music/Full+of+Hell/_/The+Cosmic+Vein",
    date: "1623014174",
  },
  {
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
    },
    url: "https://www.last.fm/music/Kalmah/_/For+the+Revolution",
    date: "1623014041",
  },
  {
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
    },
    url: "https://www.last.fm/music/Kvelertak/_/%C3%85penbaring",
    date: "1623013685",
  },
  {
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
    },
    url: "https://www.last.fm/music/Deathspell+Omega/_/Apokatastasis+Pant%C3%B4n",
    date: "1623013507",
  },
];

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
  },
];
