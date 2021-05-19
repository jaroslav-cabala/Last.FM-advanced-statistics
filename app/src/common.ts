import { Observable, timer } from "rxjs";
import { mergeMap } from "rxjs/operators";

export const getDateStringFromUts = (uts: string, locale: string = "en-GB"): string => {
  const date = new Date(parseInt(uts + "000"));
  return date.toLocaleString(locale);
};

export const getCurrentTimeString = (): string => {
  const date = new Date();
  return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s:${date.getMilliseconds()}`;
};

export const dump = (messages: unknown[]): void => console.log(`${getCurrentTimeString()}: `, ...messages);

export const retryStrategy = (
  retryStrategyArguments = {
    maxTryAttemps: 3,
    retryDelay: (retryAttempt: number) => Math.pow(2, retryAttempt) * 1000,
  }
) => (attempts: any): Observable<number> => {
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
export const findPageNumber = (paragraph: string): string | null => {
  const regex = /(?<=&page=)\d+(?=&|$)/g;
  const found = regexFindMatchInString(regex, paragraph);

  if (found?.length === 1) {
    return found[0];
  }
  return null;
};

const regexFindMatchInString = (regexExpression: RegExp, paragraph: string) => paragraph.match(regexExpression);
