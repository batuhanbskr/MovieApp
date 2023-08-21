import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';

  constructor(
    private loggingService: LoggingService, 
    private http: HttpClient
    ) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies')
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: string | number): Observable<Movie> {
    this.loggingService.add('MovieService: get movie detail by id='+id)
    return of(Movies.find(movie => movie.id === id)!);
  }

  upDate(movie: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<any>(this.apiMoviesUrl, movie, httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl, movie)

  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(this.apiMoviesUrl + '/' + movie.id);
  }

}
