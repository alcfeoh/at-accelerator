import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';

const routes: Routes = [
  {path: "", component: SearchViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
