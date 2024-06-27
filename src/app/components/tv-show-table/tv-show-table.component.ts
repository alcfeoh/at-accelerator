import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITvShow } from '../../interface/tv-show';
import { FavoritesService } from '../../service/favorites.service';
import { TvShowDetailsService } from '../../service/tv-show-details.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  protected favoritesService = inject(FavoritesService);
  protected detailsService = inject(TvShowDetailsService);
  tvShows = input<ITvShow[]>([]);
  fetchComplete = input<boolean>(true);
}
