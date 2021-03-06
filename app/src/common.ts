import { Observable, timer } from "rxjs";
import { mergeMap } from "rxjs/operators";

export class RecentTracksDownloadFailedException extends Error {
  public readonly name = "RecentTracksDownloadFailedException";

  constructor(message: string) {
    super(message);
  }
}

export const getDateStringFromUts = (uts: string, locale = "en-GB"): string => {
  const date = new Date(parseInt(uts + "000"));
  return date.toLocaleString(locale);
};

export const getCurrentTimeString = (): string => {
  const date = new Date();
  return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s:${date.getMilliseconds()}`;
};

export const dump = (messages: unknown[]): void => console.log(`${getCurrentTimeString()}: `, ...messages);

export interface RetryStrategySettings {
  maxTryAttempts: number;
  retryDelay: (retryAttempt: number) => number;
}

export const retryStrategy: (args: RetryStrategySettings) => (attempts: any) => Observable<number> =
  (retryStrategySettings: RetryStrategySettings) => (attempts) => {
    const errors: string[] = [];
    return attempts.pipe(
      mergeMap((error: Error, index: number) => {
        errors.push(error.message);
        const retryCount = index + 1;

        if (retryCount > retryStrategySettings.maxTryAttempts)
          throw Error(`Request failed after ${retryStrategySettings.maxTryAttempts} retry attempts.\n
              Original error messages: ${errors.map((err) => `[[${err}]]`)}`);

        const retryDelay = retryStrategySettings.retryDelay(retryCount);
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

const regexFindMatchInString = (regexExpression: RegExp, paragraph: string) =>
  paragraph.match(regexExpression);
