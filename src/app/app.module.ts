import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import { OneMovieComponent } from './movies/one-movie/one-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import {FormsModule} from '@angular/forms';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { DeleteMovieComponent } from './movies/delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    OneMovieComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
