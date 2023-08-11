import {Component, Input} from '@angular/core';
import {TvShowDetails} from '../types';
import {DatePipe, DecimalPipe, I18nPluralPipe, NgFor} from '@angular/common';
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  standalone: true,
  imports: [DatePipe, DecimalPipe, I18nPluralPipe, CardComponent, NgFor]
})
export default class TvShowDetailsComponent {

  @Input()
  showDetails!: TvShowDetails;

  currentImage!: string;

  back() {
    history.back();
  }

}
