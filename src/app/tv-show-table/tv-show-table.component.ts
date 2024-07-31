import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TvShow} from "../types";

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

  @Input({required: true})
  shows!: TvShow[];

  @Input()
  isLoading = false;

}
