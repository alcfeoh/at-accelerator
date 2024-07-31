import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {SearchResponse} from "../types";
import {RouterLink} from '@angular/router';
import {ToggleFavoriteDirective} from '../toggle-favorite.directive';
import {PaginatorComponent} from "../paginator/paginator.component";

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [DatePipe, RouterLink, ToggleFavoriteDirective, PaginatorComponent],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowTableComponent {

  @Input({required: true})
  showsData!: SearchResponse;

  @Input()
  isLoading = false;

  @Output()
  pageChange = new EventEmitter<number>();
}

