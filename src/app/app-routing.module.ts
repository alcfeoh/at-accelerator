import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FavoritesViewComponent} from "./favorites-view/favorites-view.component";
import {TvShowDetailsComponent} from './tv-show-details/tv-show-details.component';
import {showDetailsResolver} from './tv-show-details/tv-show-details.resolver';

const routes: Routes = [
  {path: "", component: SearchViewComponent},
  {path: "favorites", component: FavoritesViewComponent},
  {path: "details/:id", component: TvShowDetailsComponent, resolve: {showDetails: showDetailsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
