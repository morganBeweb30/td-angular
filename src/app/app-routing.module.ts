import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'all_movies', pathMatch: 'full'
  },
  {
    path: 'all_movies',  component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
