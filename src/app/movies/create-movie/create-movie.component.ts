
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

//  import the service and the model
import {MovieService} from '../movie.service';
import {Movie} from '../movie.model';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  //  MovieModel imported to store data before send it to the db
  movie: Movie = {
    title: '',
    synopsis: '',
    cover: ''
  };
  isSubmit = false;

  pageTitle : 'Ajouter un film';
  
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

//  create_movie
  //  stocker les données du movie dans le model
  saveMovie() {
    const data = {
      title: this.movie.title,
      synopsis: this.movie.synopsis,
      cover: this.movie.cover
    }

    this.movieService.create_movie(data).subscribe(() => {
      this.isSubmit = true;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  //  Afficher un nouveau form vide, si on clique sur le bouton '+'
  newMovie() {
    this.isSubmit = false;
    this.movie = {
      title: '',
      synopsis: '',
      cover: ''
    }
  }


}
