import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';
import { TvShowDetailsService } from '../tv-show-details.service';

@Component({
  selector: 'app-favorites-view',
  imports: [CommonModule, FavoriteCardComponent],
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {

  protected showDetails$ = inject(TvShowDetailsService).allTvShowDetails$;
}
