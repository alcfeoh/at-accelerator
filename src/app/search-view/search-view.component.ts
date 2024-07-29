import {Component, inject, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import {SearchService} from "../search.service";
import {TvShow} from "../types";

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

  protected searchService = inject(SearchService);
  protected data!: Signal<TvShow[]>;

  constructor() {
      this.runSearch();
  }

  runSearch(term = "", event?: Event) {
    event?.preventDefault();
    this.data = this.searchService.search(term);
  }
}
