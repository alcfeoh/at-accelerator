import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITvShow } from '../../interface/tv-show';
import { FavoritesService } from '../../service/favorites.service';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  constructor(private favoritesService: FavoritesService){
    this.currentFavoriteShows = this.favoritesService.getFavorites();
  }
  tvShows = input<ITvShow[]>([]);
  fetchComplete = input<boolean>(true);
  currentFavoriteShows: number[] = [];

  toggleFavorite(showId: number): void{
    this.favoritesService.toggleFavorite(showId);
    this.currentFavoriteShows = this.favoritesService.getFavorites();
  }
}
