export function get(uri, additionalParams) {
  for (const param of additionalParams) {
    uri += `&${param.name}=${param.value}`;
  }
  return fetch(uri);
}
