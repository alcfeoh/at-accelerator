import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TvShowDetails, TvShowId} from './types';
import {map, Observable} from 'rxjs';
import {API_URL} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private http: HttpClient) { }

  getShowDetails(showId: TvShowId): Observable<TvShowDetails> {
    return this.http.get<{tvShow: TvShowDetails}>(`${API_URL}show-details?q=${showId}`).pipe(
      map(data => data.tvShow)
    )
  }
}
