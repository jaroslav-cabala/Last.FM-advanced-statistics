import { get } from "./http";

describe("Http", () => {
  describe("get()", () => {
    describe("url is correctly set -> contains additional query params if specified", () => {
      let fetchMock: jest.Mock;

      beforeEach(() => {
        fetchMock = global.fetch = jest.fn();
      });

      afterEach(() => {
        fetchMock.mockClear();
      });

      test.each([
        {
          url: "https://cool.domain/data",
          queryParams: [{ name: "page", value: "1" }],
          expected: "https://cool.domain/data?page=1",
        },
        {
          url: "https://cool.domain/data?",
          queryParams: [{ name: "page", value: "1" }],
          expected: "https://cool.domain/data?page=1",
        },
        {
          url: "https://cool.domain/data?name=testName",
          queryParams: [{ name: "page", value: "1" }],
          expected: "https://cool.domain/data?name=testName&page=1",
        },
        {
          url: "https://cool.domain/data?name=testName&",
          queryParams: [{ name: "page", value: "2" }],
          expected: "https://cool.domain/data?name=testName&page=2",
        },
        {
          url: "https://cool.domain/data?name=testName3&",
          queryParams: [
            { name: "page", value: "3" },
            { name: "random", value: "data" },
          ],
          expected: "https://cool.domain/data?name=testName3&page=3&random=data",
        },
        {
          url: "https://cool.domain/data?name=testName&",
          queryParams: undefined,
          expected: "https://cool.domain/data?name=testName&",
        },
        { url: "https://cool.domain/data?", queryParams: undefined, expected: "https://cool.domain/data?" },
      ])("url = $url, queryParams = $queryParams)", ({ url, queryParams, expected }) => {
        get(url, queryParams);

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(expected);
      });
    });
  });
});
