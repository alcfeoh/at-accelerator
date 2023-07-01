import {Injectable, Signal, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./app.constants";
import {SearchResponse, TvShow} from "./types";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private lastSearchResults = signal<TvShow[]>([]);

  constructor(private http: HttpClient) { }

  search(term = ""): Signal<TvShow[]> {
    this.searching.set(true);
    this.http.get<SearchResponse>(API_URL + `search?q=${term}&page=1`).subscribe(data => {
        this.lastSearchResults.set(data.tv_shows);
        this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}
