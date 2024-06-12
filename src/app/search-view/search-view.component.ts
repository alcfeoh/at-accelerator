import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { SearchService } from '../search.service';
import { TvShow } from '../types';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  private searchService = inject(SearchService);
  protected data!: Signal<TvShow[]>;

  ngOnInit() {
    this.runSearch();
  }
  runSearch(term = '') {
    this.data = this.searchService.search(term);
  }

  

}
