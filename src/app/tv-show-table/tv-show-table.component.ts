import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TvShow} from "../types";
import {RouterLink} from '@angular/router';
import {ToggleFavoriteDirective} from '../toggle-favorite.directive';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [DatePipe, RouterLink, ToggleFavoriteDirective],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

  @Input({required: true})
  shows!: TvShow[];

  @Input()
  isLoading = false;
}

