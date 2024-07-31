import {Component, inject, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TvShow} from "../types";
import {FavoritesService} from '../favorites.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

  protected favoritesService = inject(FavoritesService);

  @Input({required: true})
  shows!: TvShow[];

  @Input()
  isLoading = false;
}

