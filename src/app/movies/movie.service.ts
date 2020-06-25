//  import the model to store the object inside
import {Movie} from './movie.model';

//  import the Injectable module to use Dependancy Injections
import { Injectable } from '@angular/core';
//  import HttpClient to use url adresses
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

  get_one_movie(id: number) {
    return this.http.get<Movie>(`${this.uri}/one_movie/${id}`);
  }

  create_movie(data: Movie) {
    return this.http.post<Movie>(`${this.uri}/create_movie`, data);
  }




}
