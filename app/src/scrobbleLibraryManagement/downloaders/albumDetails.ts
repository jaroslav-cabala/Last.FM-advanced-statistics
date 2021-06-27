import { IRelease, MusicBrainzApi } from "musicbrainz-api";

import { defer, from } from "rxjs";
import { map, retryWhen, tap } from "rxjs/operators";

import { defaultRetryStrategySettings } from "../../appConfiguration";
import { retryStrategy } from "../../common";
import { AlbumDetails } from "../../models/domain";
import { deserializeAlbumDetails } from "../deserializer";

const musicBrainzApi = new MusicBrainzApi({
  appName: "lastfm-advanced-statistics",
  appVersion: "0.1.0",
  appContactInfo: "https://github.com/jaroslav-cabala/Last.FM-advanced-statistics",
});

export const getArtistDetails = function (mbid: string): Promise<AlbumDetails> {
  return defer(() => from(musicBrainzApi.getRelease(mbid)))
    .pipe(
      map<IRelease, AlbumDetails>((data: IRelease) => deserializeAlbumDetails(data)),
      tap({
        next: () => console.log("Artist details obtained!"),
      }),
      retryWhen(retryStrategy(defaultRetryStrategySettings))
    )
    .toPromise();
};
