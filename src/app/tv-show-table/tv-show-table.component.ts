import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShow } from '../types';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  @Input({required: true})
  shows!: TvShow[];
  @Input()
  isLoading = false;
}
