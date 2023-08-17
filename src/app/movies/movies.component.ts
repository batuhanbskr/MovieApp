import { Component } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "Movie List"

  movie: Movie = {
    id: 1,
    name : "Movie Name" 
  }
}
