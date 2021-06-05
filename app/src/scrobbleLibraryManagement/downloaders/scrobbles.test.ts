import * as httpModule from "../../httpRequest/http";
import { GetRecentTracksResponse } from "../../models/lastFMApiResponses";
import { getScrobbles$ } from "./scrobbles";

const getRecentTracksResponseTest: GetRecentTracksResponse = {
  recenttracks: {
    "@attr": {
      page: 1,
      perPage: 3,
      total: 11,
      totalPages: 4,
      user: "testUser"
    },
    track: [
      {
        "@attr": { nowplaying: "true" },
        mbid: "mbidTestTrack1",
        name: "testTrack1",
        album: {
          mbid: "mbidTestAlbum1",
          "#text": "test_album1"
        },
        artist: {
          mbid: "mbidTestArtist1",
          "#text": "test_artist1"
        },
        url: "testUrl1"
      },
      {
        "@attr": { nowplaying: "true" },
        mbid: "mbidTestTrack2",
        name: "testTrack2",
        album: {
          mbid: "mbidTestAlbum2",
          "#text": "test_album2"
        },
        artist: {
          mbid: "mbidTestArtist2",
          "#text": "test_artist2"
        },
        url: "testUrl1"
      },
      {
        "@attr": { nowplaying: "true" },
        mbid: "mbidTestTrack3",
        name: "testTrack3",
        album: {
          mbid: "mbidTestAlbum3",
          "#text": "test_album3"
        },
        artist: {
          mbid: "mbidTestArtist3",
          "#text": "test_artist3"
        },
        url: "testUrl1"
      }
    ]
  }
};

describe("downloaders: scrobbles", () => {
  describe("getScrobbles$", () => {
    beforeEach(() => {
      //
    });

    test.only(`should return empty array if all scrobbles could not be downloaded
          (a request to download a portion of scrobbles failed 4 times`, () => {
      const throwErrorFn = () => { throw new Error(); };
      jest.spyOn(httpModule, "get").mockImplementation(() => {
        return Promise.resolve({} as Response);
      });
      jest.spyOn(httpModule, "inspectFetchResponse")
        .mockImplementationOnce(() => Promise.resolve(getRecentTracksResponseTest))
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn);

      getScrobbles$(2).subscribe({
        next: (scrobbles) => {
          expect(scrobbles).toBe([]);
        },
        error: (err) => console.log(`error in getScrobbles$ - ${err}`),
        complete: () => console.log("getScrobbles$ completed!"),
      });
    });

    test("should return array of all downloaded scrobbles if all scrobbles were downloaded", () => {
      //
    });

    test(`should return array of all downloaded scrobbles if all scrobbles were downloaded
          and one of the requests had to be retried`, () => {
      //
    });
  });
});
