import {Injectable, Signal, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./app.constants";
import {SearchResponse} from "./types";


const NO_DATA: SearchResponse = {page: 1, pages: 0, tv_shows: [], total: ""};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private lastSearchResults = signal<SearchResponse>(NO_DATA);

  constructor(private http: HttpClient) { }

  search(term = "", page = 1): Signal<SearchResponse> {
    this.lastSearchResults.set(NO_DATA);
    this.searching.set(true);
    const endpoint = term != "" ? "search" : "most-popular";
    let url = API_URL + endpoint + "?page=" + page + (term != "" ? `&q=${term}`: '');
    this.http.get<SearchResponse>(url).subscribe(data => {
        this.lastSearchResults.set(data);
        this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}
