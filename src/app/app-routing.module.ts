import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  import the components
import {MoviesComponent} from './movies/movies.component';
import {OneMovieComponent} from './movies/one-movie/one-movie.component';
import {CreateMovieComponent} from './movies/create-movie/create-movie.component';
import {UpdateMovieComponent} from './movies/update-movie/update-movie.component';
import {DeleteMovieComponent} from './movies/delete-movie/delete-movie.component';

const routes: Routes = [
  { path: 'one_movie/:id', component: OneMovieComponent },
  { path: 'create_movie', component: CreateMovieComponent},
  { path: 'all_movies',  component: MoviesComponent },
  { path: 'update_movie/:id', component: UpdateMovieComponent },
  { path: 'delete_movie/:id', component: DeleteMovieComponent },
  { path: '', redirectTo: 'all_movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
