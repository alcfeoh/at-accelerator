import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { TvShowService } from '../../service/tv-show.service';
import { ITvShow } from '../../interface/tv-show';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent, ReactiveFormsModule],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  constructor(private tvShowService: TvShowService, private fb: FormBuilder){}

  public tvShows: ITvShow[] = [];
  public searchForm: FormGroup = this.fb.group({
    name: this.fb.control('')
  });
  public fetchComplete: boolean = false;

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(name: string = ''): void{
    this.fetchComplete = false;
    this.tvShowService.getTvShows(name).subscribe((data) => {
      this.tvShows = data;
      this.fetchComplete = true;
    });
  }

  onSubmit(){
    const name = this.searchForm.get('name')?.value;
    this.getTvShows(name);
  }
}
