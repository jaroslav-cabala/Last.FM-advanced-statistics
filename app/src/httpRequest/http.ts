export function get(uri: string, additionalParams: Record<string, string>[]) {
  for (const param of additionalParams) {
    uri += `&${param.name}=${param.value}`;
  }
  return fetch(uri);
}
