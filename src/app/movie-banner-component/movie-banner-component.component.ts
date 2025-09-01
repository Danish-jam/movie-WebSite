import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { delay } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-banner-component',
  templateUrl: './movie-banner-component.component.html',
  styleUrls: ['./movie-banner-component.component.css']
})
export class MovieBannerComponentComponent implements OnInit {
  id!: number;
  selectedMovie: any;
  loading: boolean = true
  constructor(private apiService: MovieService, private router: ActivatedRoute,) { }

  ngOnInit(): void {

    // const randomId = Math.floor(Math.random() * 9);
    // this.movieSer.getmovieById(randomId).subscribe((res) => {
    //   this.movie = res
    // })

    this.apiService.getUpcomingMovies(1).subscribe(response => {
      const movies = response.results;
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length); // pick random movie
        setTimeout(() => {
          this.selectedMovie = movies[randomIndex];
          this.loading = false
        }, 3000);
      }
    });
  }
}
