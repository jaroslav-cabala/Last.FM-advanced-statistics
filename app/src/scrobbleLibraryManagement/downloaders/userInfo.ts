import { defer, from } from "rxjs";
import { concatMap, map, retryWhen, tap } from "rxjs/operators";

import { defaultRetryStrategySettings, getUserInfoResourceUri } from "../../appConfiguration";
import { retryStrategy } from "../../common";
import { get, inspectFetchResponse } from "../../httpRequest/http";
import { User } from "../../models/domain";
import { GetUserInfoResponse } from "../../models/lastFMApiResponses";

export const getUserInfo = function (username: string): Promise<User> {
  return defer(() => from(get(getUserInfoResourceUri, [{ name: "user", value: username }])))
    .pipe(
      concatMap(inspectFetchResponse),
      map<GetUserInfoResponse, User>(
        (data: GetUserInfoResponse) => new User(data.user.name, data.user.playcount, data.user.url)
      ),
      tap({
        next: () => console.log("User info obtained!"),
      }),
      retryWhen(retryStrategy(defaultRetryStrategySettings))
    )
    .toPromise();
};
