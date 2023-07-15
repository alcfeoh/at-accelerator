import {inject} from '@angular/core';
import { ActivatedRouteSnapshot} from '@angular/router';
import {TvShowDetailsService} from '../tv-show-details.service';
import {Observable} from 'rxjs';
import {TvShowDetails} from '../types';


export function showDetailsResolver(route: ActivatedRouteSnapshot): Observable<TvShowDetails> {
  const id = Number(route.paramMap.get("id"));
  return inject(TvShowDetailsService).getShowDetails(id);
}
