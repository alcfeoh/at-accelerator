import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

}
