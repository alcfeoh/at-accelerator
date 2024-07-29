import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesViewComponent } from './favorites-view/favorites-view.component';
import {HttpClientModule} from "@angular/common/http";
import {FavoriteCardComponent} from './favorite-card/favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FavoriteCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
