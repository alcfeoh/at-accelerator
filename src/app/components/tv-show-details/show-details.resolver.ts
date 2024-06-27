import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IShowDetailsResponse } from "../../interface/show-details";
import { TvShowDetailsService } from "../../service/tv-show-details.service";

export function showDetailsResolver(route: ActivatedRouteSnapshot): Observable<IShowDetailsResponse> {
    const id = Number(route.paramMap.get("id"));
    const result = inject(TvShowDetailsService).getShowDetails(id);
    debugger;
    return result; 
  }