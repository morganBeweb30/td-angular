import { Component, OnInit } from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  pageTitle: 'tous les films';
  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    //  this.service.route().subscribe(result) => {this.variable = result}
    this.movieService.get_all_movies().subscribe(result => {
      this.movies = result;
      console.log(result);
    });

  }

}
