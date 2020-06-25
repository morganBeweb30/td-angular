
//  import the executive files of Angular
import { Component, OnInit } from '@angular/core';
//  import router module to use paramMap
import {ActivatedRoute, Router} from '@angular/router';
//  import th service tu acces database and datas
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {

  pageTitle = 'Fiche d\'un film';
  curMovie = null;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  //  on init map the route to access the id param
  ngOnInit(): void {
    this.one_movie(this.route.snapshot.paramMap.get('id'));
  }
  
  //  subscribe to the service to access to the database
  one_movie(id) {
    this.movieService.get_one_movie(id).subscribe((result) => {
      this.curMovie = result;
      console.log(result);
    }, (err) => {
      console.log(err);
    })
  }

}
