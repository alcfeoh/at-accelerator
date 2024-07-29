import {Directive, HostBinding, HostListener, inject, Input} from '@angular/core';
import {FavoritesService} from './favorites.service';
import {TvShowId} from './types';

@Directive({
  selector: '[appToggleFavorite]',
  standalone: true
})
export class ToggleFavoriteDirective {

  private favoritesService = inject(FavoritesService);

  @Input({required: true, alias: 'appToggleFavorite'})
  favoriteId!: TvShowId;

  @HostListener('click')
  toggleFavorite() {
    this.favoritesService.toggleFavorite(this.favoriteId);
  }

  @HostBinding('class.highlight')
  get isFavorite() {
    return this.favoritesService.favorites().includes(this.favoriteId);
  }

}
