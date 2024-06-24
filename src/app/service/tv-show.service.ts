import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisoDateResponse, ITvShow } from '../interface/tv-show';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  defaultSearchUrl = 'https://www.episodate.com/api/search';

  constructor(private http: HttpClient) { }

  getTvShows(name: string = ''): Observable<ITvShow[]> {
    const url = `https://www.episodate.com/api/search?q=${name}&page=1`

    return this.http.get<IEpisoDateResponse>(url).pipe(
      map(response => {
        const tvShows = response.tv_shows;
        tvShows.map(show => show.start_date = new Date(show.start_date).getFullYear().toString());
        return tvShows;
      })
    );
  }
}
