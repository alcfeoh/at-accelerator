import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITvShow } from '../interface/tv-show';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  defaultSearchUrl = 'https://www.episodate.com/api/search';

  constructor(private http: HttpClient) { }

  getTvShows(name: string = ''): Observable<ITvShow[]> {
    const url = `https://www.episodate.com/api/search?q=${name}&page=1`

    return this.http.get<any>(url).pipe(
      map(response => {
        const tvShows: ITvShow[] = response.tv_shows.map((show: any) => ({
          id: show.id,
          name: show.name,
          permalink: show.permalink,
          startDate: new Date(show.start_date).getFullYear(),
          endDate: new Date(show.end_date).getFullYear(),
          country: show.country,
          network: show.network,
          status: show.status,
          imageThumbnailPath: show.image_thumbnail_path
        }));
        return tvShows;
      })
    );
  }
}
