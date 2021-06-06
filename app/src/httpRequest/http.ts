import { dump } from "../common";

export const get = function (
  uri: string,
  additionalParams: Record<string, string>[] = []
): Promise<Response> {
  for (const param of additionalParams) {
    uri += `&${param.name}=${param.value}`;
  }
  return fetch(uri);
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
