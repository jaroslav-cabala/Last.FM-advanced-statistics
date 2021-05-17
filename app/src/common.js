import { timer } from "../node_modules/rxjs/_esm2015/index.js";
import { mergeMap } from "../node_modules/rxjs/_esm2015/internal/operators/index.js";

export const getCurrentTimeString = () => {
  const date = new Date();
  return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s:${date.getMilliseconds()}`;
};

export const dump = (messages) => console.log(`${getCurrentTimeString()}: `, ...messages);

export const retryStrategy = (
  retryStrategyArguments = { maxTryAttemps: 3, retryDelay: (retryAttempt) => Math.pow(2, retryAttempt) * 1000 }
) => (attempts) => {
  return attempts.pipe(
    mergeMap((error, index) => {
      const retryCount = index + 1;

      if (retryCount > retryStrategyArguments.maxTryAttemps)
        throw Error(`Request failed after ${retryStrategyArguments.maxTryAttemps} retry attempts.\n
          Original error: ${error}`);

      const retryDelay = retryStrategyArguments.retryDelay(retryCount);
      dump([`Retrying ${retryCount}. time in ${retryDelay}ms`]);
      return timer(retryDelay);
    })
  );
};

/*
 * Finds page number in provided string using regular expression.
 * Returns the page number if the provided string contains exactly 1 match,
 * otherwise returns null.
 */
export const findPageNumber = (paragraph) => {
  const regex = /(?<=&page=)\d+(?=&|$)/g;
  const found = regexFindMatchInString(regex, paragraph);

  if (found?.length === 1) {
    return found[0];
  }
  return null;
};

const regexFindMatchInString = (regexExpression, paragraph) => paragraph.match(regexExpression);
