import { Injectable } from '@angular/core';
import {Movie} from './movie.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  get_all_movies() {
    return this.http.get<Movie[]>(`${this.uri}`);
  }


}
