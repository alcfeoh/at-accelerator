import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TvShowDetails, TvShowId, TvShowIds} from './types';
import {forkJoin, map, Observable, shareReplay, switchMap} from 'rxjs';
import {API_URL} from './app.constants';
import {toObservable} from '@angular/core/rxjs-interop';
import {FavoritesService} from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  private http = inject(HttpClient);
  private favorites$ = toObservable(inject(FavoritesService).favorites);
  readonly allTvShowDetails$: Observable<TvShowDetails[]> = this.favorites$.pipe(
    switchMap(showIds => this.getAllTvShowDetails(showIds)),
    shareReplay(1)
  )

  getShowDetails(showId: TvShowId): Observable<TvShowDetails> {
    return this.http.get<{tvShow: TvShowDetails}>(`${API_URL}show-details?q=${showId}`).pipe(
      map(data => {
        data.tvShow.seasonCount = data.tvShow.episodes.at(-1)!.season;
        return data.tvShow;
      })
    )
  }

  private getAllTvShowDetails(showIds: TvShowIds): Observable<TvShowDetails[]> {
    return forkJoin(showIds.map(id => this.getShowDetails(id)))
      .pipe(
        map(this.sortTvShowsByNextEpisodeDate),
      );
  }

  private sortTvShowsByNextEpisodeDate(tvShowDetails: TvShowDetails[]): TvShowDetails[] {
    tvShowDetails.sort((show1, show2) => {
      if (show1.status === "Running" && show2.status !== "Running") {
        return -1;
      }
      if (show1.status === "Ended" || show1.status === "Canceled/Ended") {
        return 1;
      }
      if (show1.countdown && !show2.countdown) {
        return -1;
      }
      if (show1.countdown && show2.countdown && show1.countdown?.air_date < show2.countdown?.air_date) {
        return -1;
      }
      return 0;
    });
    return tvShowDetails;
  }
}
