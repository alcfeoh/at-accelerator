import {effect, inject, Injectable, signal} from '@angular/core';
import {TvShowId, TvShowIds} from './types';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly FAVORITES_KEY = "favorites";
  private storage = inject(StorageService<TvShowIds>);
  private favoritesSignal = signal<TvShowIds>(this.storage.get(this.FAVORITES_KEY));
  favorites = this.favoritesSignal.asReadonly();

  constructor() {
    // Registering an effect to update localStorage so this code will run no matter
    // where and when the signal value is updated - no need for duplication
    effect(() => this.storage.set(this.FAVORITES_KEY, this.favoritesSignal()));
  }

  toggleFavorite(id: TvShowId): void {
    const index = this.favoritesSignal().indexOf(id);
    if (index !== -1)
      this.favoritesSignal.update(favorites => {
        favorites.splice(index, 1);
        return [...favorites];
      });
    else
      this.favoritesSignal.update(favorites => [...favorites, id]);
  }
}
