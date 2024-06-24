import {effect, inject, Injectable, signal} from '@angular/core';
import {StorageService} from './storage.service';
import { TvShowId, TvShowIds } from '../shared/types';
import { FAVORITE_SHOWS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  private storage = inject(StorageService<TvShowIds>);
  private favoritesSignal = signal<TvShowIds>(this.storage.get(FAVORITE_SHOWS));
  readonly favorites = this.favoritesSignal.asReadonly();

  constructor() {
    effect(() => this.storage.set(FAVORITE_SHOWS, this.favoritesSignal()));
  }

  toggleFavorite(id: TvShowId): void {
    const index = this.favoritesSignal().indexOf(id);
    if (index !== -1)
      this.favoritesSignal.update(favorites => favorites.filter((_, i) => i !== index));
    else
      this.favoritesSignal.update(favorites => [...favorites, id]);
  }
}