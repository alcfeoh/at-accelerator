import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowDetails} from '../types';
import {FavoritesService} from '../favorites.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent {

  protected favoritesService = inject(FavoritesService);

  @Input({required: true})
  tvShowDetails!: TvShowDetails;

}
