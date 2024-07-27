import { Component, Input } from '@angular/core';
import { IShowDetailsResponse } from '../../interface/show-details';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})

export class TvShowDetailsComponent {
  @Input() showDetails!: IShowDetailsResponse;
}
