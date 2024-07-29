import {Component, Input} from '@angular/core';
import {TvShowDetails} from '../types';
import {DatePipe, DecimalPipe, I18nPluralPipe} from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  standalone: true,
  imports: [DatePipe, DecimalPipe, I18nPluralPipe]
})
export default class TvShowDetailsComponent {

  @Input()
  showDetails!: TvShowDetails;

  back() {
    history.back();
  }

}
