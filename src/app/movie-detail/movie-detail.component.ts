import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie!: Movie;

  
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.movieService.getMovie(id)
            .subscribe(movie => this.movie = movie);
  }
}
