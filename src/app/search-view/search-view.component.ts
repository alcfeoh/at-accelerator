import { Component } from '@angular/core';

import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';

@Component({
    selector: 'app-search-view',
    imports: [TvShowTableComponent],
    templateUrl: './search-view.component.html',
    styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

}
