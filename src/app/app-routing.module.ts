import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  import the components
import {MoviesComponent} from './movies/movies.component';
import {OneMovieComponent} from './movies/one-movie/one-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';

const routes: Routes = [
  { path: 'one_movie/:id', component: OneMovieComponent },
  { path: 'create_movie', component: CreateMovieComponent},
  { path: 'all_movies',  component: MoviesComponent },
  { path: '', redirectTo: 'all_movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
