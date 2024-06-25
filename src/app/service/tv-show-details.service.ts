import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShowDetailsResponse } from '../interface/show-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://www.episodate.com/api/show-details?q=';
  export const showDetailsResolver(id: number): Observable<IShowDetailsResponse>{
    return this.http.get<IShowDetailsResponse>(this.baseUrl + id);
  }
}
