import { timer } from "../node_modules/rxjs/_esm2015/index.js";
import { finalize, mergeMap } from "../node_modules/rxjs/_esm2015/internal/operators/index.js";

export const getCurrentTimeString = () => {
  const date = new Date();
  return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s:${date.getMilliseconds()}`;
};

export const dump = (message) => console.log(message);

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
      dump(`${getCurrentTimeString()} - retrying ${retryCount}. time in ${retryDelay}ms`);
      return timer(retryDelay);
    }),
    finalize(() => dump(`${getCurrentTimeString()} - Retry is done!`))
  );
};
