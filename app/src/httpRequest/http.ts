import { dump } from "../common";

type QueryParam = { name: string; value: string };

type QueryParam2 = Record<"name" | "value", string>[];

export const get = function (url: string, queryParams: QueryParam[] = []): Promise<Response> {
  let urlToFetch = url;
  if (!url.includes("?")) {
    urlToFetch += "?";
  } else if (!url.endsWith("?") && !url.endsWith("&")) {
    urlToFetch += "&";
  }

  urlToFetch += queryParams.map((param: QueryParam) => `${param.name}=${param.value}`).join("&");

  return fetch(urlToFetch);
};

/*
 * Looks at a fetch response. If the response is not OK(status code 200, 2**), throws an error.
 * If it's OK, returns a Promise that resolves to the response content in json.
 */
export const inspectFetchResponse = async (response: Response): Promise<any> => {
  if (response.ok) {
    return response.json();
  }

  const { message } = await response.json();
  dump([`Request ${response.url} failed: `, response.status, message]);
  throw new Error(message);
};
