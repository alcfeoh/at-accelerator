import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { FAVORITE_SHOWS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private storageService: StorageService){}

  toggleFavorite(id: number){
    let favorites = this.storageService.get(FAVORITE_SHOWS);
    if(favorites != undefined){
      if(favorites.includes(id)){
        favorites = favorites.filter(item => item != id);
      } else {
        favorites.push(id);
      }
    }
    this.storageService.set(FAVORITE_SHOWS, favorites ?? [id]);
  }
}
