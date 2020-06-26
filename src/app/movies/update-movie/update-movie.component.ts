
import { Component, OnInit } from '@angular/core';
//  router, activatedRoute
import {ActivatedRoute, Router} from '@angular/router';
//  form
import {Form} from '@angular/forms';

//  service
import {MovieService} from '../../movies/movie.service';
//  model
import {Movie} from '../../movies/movie.model';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  //  declare 'data' variable to store the inputs
  // movie: Movie = {
  //   title: '',
  //   synopsis: '',
  //   cover: ''
  // };
  movie = null;

  isSubmit = false;

  pageTitle : 'Modifier un film';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /*
  uri : update_movie/:id
  route : appel au component updateMovieComponent
    affiche le formulaire vide
  méthode : post, flag isSubmit = true :
    stocke le contenu des inputs dans un objet d'objets (data)
  appel à la méthode movieService.update_movie avec l'id en paramètre :
    requête : put UPDATE movies SET (colonnes = dataColonnes) WHERE id = id passée en paramètre de l'uri
  Réponse :
    statut(201) comme flag pour afficher un résultat à l'utilisateur
    avec un bouton / lien pour rentourner à tous les films
  */

  ngOnInit(): void {
    this.one_movie(this.route.snapshot.paramMap.get('id'))
  }

  //  get the movie by its id
  one_movie(id) {
    this.movieService.get_one_movie(id).subscribe((movie) => {
      this.movie = movie;
    }, (err) => {
      console.log(err);
    })
  };

  updateMovie() {
    //  store the movie's data into the 'data' variable, from the 'movie' variable
    const data = {
      title: this.movie.title,
      synopsis: this.movie.synopsis,
      cover: this.movie.cover
    }

    const id = this.movie.id;

    this.movieService.update_movie(id, data).subscribe(() => {
      this.isSubmit = true;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

/*  exoProduct  
  getProductById(id) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    }, (error) => {
      console.log(error);
    })
  }

  updateProduct() {
    const data = {
      name: this.product.name,
      description: this.product.description
    };
    
    const id = this.product._id;
    
    this.productService.updateProduct(id, data).subscribe(() => {
      this.isSubmit = true;
    }, (err) => {
      console.log(err);
    })
  }
  fin exoProduct  */

}


