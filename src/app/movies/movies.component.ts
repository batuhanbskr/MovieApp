import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "Movie List"
  movies!: Movie[];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies(); // yazdığımız methotları çağırıyoruz.
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  //service tarafından gelen asenkron methodu burada bekliyor ve subscribe ile yakalıyoruz.
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

}
