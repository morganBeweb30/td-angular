import { Component, OnInit } from '@angular/core';
//  router, activatedRoute, service
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(
    //  service, route, router needed
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  pageTitle = 'Film supprimé';

  ngOnInit(): void {
    //  get movie by its id
    //  this.method-below(this.route.snapshot.paramMap.action('id'));
    this.deleteMovie(this.route.snapshot.paramMap.get('id'));
  }

  deleteMovie(id) {
    //  subscribe to the service's method to do the wanted action
    this.movieService.delete_movie(id).subscribe(() => {
      console.log('film supprimé');
    }, (err) => {
      console.log(err);
    })
  }

}
