import { IArtist, MusicBrainzApi } from "musicbrainz-api";

import { defer, from } from "rxjs";
import { map, retryWhen, tap } from "rxjs/operators";

import { defaultRetryStrategySettings } from "../../appConfiguration";
import { retryStrategy } from "../../common";
import { ArtistDetails } from "../../models/domain";
import { deserializeArtistDetails } from "../deserializer";

const musicBrainzApi = new MusicBrainzApi({
  appName: "lastfm-advanced-statistics",
  appVersion: "0.1.0",
  appContactInfo: "https://github.com/jaroslav-cabala/Last.FM-advanced-statistics",
});

export const getArtistDetails = function (mbid: string): Promise<ArtistDetails> {
  return defer(() => from(musicBrainzApi.getArtist(mbid)))
    .pipe(
      map<IArtist, ArtistDetails>((data: IArtist) => deserializeArtistDetails(data)),
      tap({
        next: () => console.log("Artist details obtained!"),
      }),
      retryWhen(retryStrategy(defaultRetryStrategySettings))
    )
    .toPromise();
};
