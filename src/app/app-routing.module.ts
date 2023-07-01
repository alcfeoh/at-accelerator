import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FavoritesViewComponent} from "./favorites-view/favorites-view.component";

const routes: Routes = [
  {path: "", component: SearchViewComponent},
  {path: "favorites", component: FavoritesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
