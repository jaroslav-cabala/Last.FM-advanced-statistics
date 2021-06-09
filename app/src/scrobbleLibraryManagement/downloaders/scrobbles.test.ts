import {
  testDeserializedScrobblesPage1,
  testDeserializedScrobblesPage2,
  testGetRecentTracksResponseJSONPage1,
  testGetRecentTracksResponseJSONPage2,
} from "../../files/testScrobbles";
import * as httpModule from "../../httpRequest/http";
import { getScrobbles$ } from "./scrobbles";

describe("downloaders: scrobbles", () => {
  describe("getScrobbles$", () => {
    const throwErrorFn = () => {
      throw new Error();
    };

    test(`should throw RecentTracksDownloadFailedException if downloading of scrobbles fails
          (a request to download a portion of scrobbles failed 4 times`, (done) => {
      jest.spyOn(httpModule, "get").mockImplementation(() => {
        return Promise.resolve({} as Response);
      });
      jest
        .spyOn(httpModule, "inspectFetchResponse")
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage1)))
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage2)))
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn);

      getScrobbles$(3, {
        maxTryAttempts: 3,
        retryDelay: (retryAttempt: number) => retryAttempt * 100,
      }).subscribe({
        error: (error: Error) => {
          expect(error.name).toBe("RecentTracksDownloadFailedException");
          done();
        },
      });
    });

    test(`should return array of all downloaded scrobbles if all scrobbles were downloaded
          and all requests to download portion of scrobbles succeeded on 1st attempt`, (done) => {
      jest.spyOn(httpModule, "get").mockImplementation(() => {
        return Promise.resolve({} as Response);
      });
      jest
        .spyOn(httpModule, "inspectFetchResponse")
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage1)))
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage2)));

      const expected = testDeserializedScrobblesPage1.concat(testDeserializedScrobblesPage2);
      getScrobbles$(2).subscribe({
        next: (scrobbles) => {
          expect(scrobbles).toEqual(expected);
          expect(scrobbles.length).toEqual(expected.length);
          done();
        },
      });
    });

    test(`should return array of all downloaded scrobbles if all scrobbles were downloaded
          and some requests to download portion of scrobbles had to be retried`, (done) => {
      jest.spyOn(httpModule, "get").mockImplementation(() => {
        return Promise.resolve({} as Response);
      });
      jest
        .spyOn(httpModule, "inspectFetchResponse")
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage1)))
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage2)))
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage2)))
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(throwErrorFn)
        .mockImplementationOnce(() => Promise.resolve(JSON.parse(testGetRecentTracksResponseJSONPage1)));

      const expected = [
        ...testDeserializedScrobblesPage1,
        ...testDeserializedScrobblesPage2,
        ...testDeserializedScrobblesPage2,
        ...testDeserializedScrobblesPage1,
      ];
      getScrobbles$(4, {
        maxTryAttempts: 3,
        retryDelay: (retryAttempt: number) => retryAttempt * 100,
      }).subscribe({
        next: (scrobbles) => {
          expect(scrobbles).toEqual(expected);
          expect(scrobbles.length).toEqual(expected.length);
          done();
        },
      });
    });
  });
});
