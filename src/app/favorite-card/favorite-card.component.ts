import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TvShowDetails} from '../types';
import {RouterLink} from '@angular/router';
import {ToggleFavoriteDirective} from '../toggle-favorite.directive';
import {CountdownPipe} from '../countdown.pipe';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ToggleFavoriteDirective, CountdownPipe],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteCardComponent {

  @Input({required: true})
  tvShowDetails!: TvShowDetails;

}
