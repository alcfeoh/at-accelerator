import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchViewComponent} from './components/search-view/search-view.component';
import {FavoritesViewComponent} from "./components/favorites-view/favorites-view.component";
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details/tv-show-details.component';

const routes: Routes = [
  {path: "", component: SearchViewComponent},
  {path: "favorites", component: FavoritesViewComponent},
  {path: "details", component: TvShowDetailsComponent, resolve: { showDetails: showDetailsResolver }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
