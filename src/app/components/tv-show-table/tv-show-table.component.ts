import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITvShow } from '../../interface/tv-show';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  @Input() tvShows: ITvShow[] = [];
  @Input() fetchComplete: boolean = true;
}
