import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {
  popularMovies: any[] = [];
  page: number = 1
  loading = true;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  scrollCount: number = 0; // counter for wheel down events
  maxScrollCount: number = 6

  constructor(private apiService: MovieService) {

  }


  ngOnInit(): void {
    setTimeout(() => {
      this.loadPopularMovies();
      this.loading = false;
    }, 3000);
  }

  loadPopularMovies(): void {
    this.apiService.getPopular('movie', this.page).subscribe((res) => {
      this.popularMovies = [...this.popularMovies, ...res.results];
      console.log(res);
      
    });
  }


  ; // threshold to trigger loading

  onWheel(event: WheelEvent): void {
    const target = event.currentTarget as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    this.loading = true;
    // Only count downward scroll (deltaY > 0)
    if (event.deltaY > 0) {
      this.scrollCount++;

      // If user has scrolled 4 times downward, check for bottom
      if (this.scrollCount >= this.maxScrollCount) {
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          setTimeout(() => {
            this.page++;
            this.loadPopularMovies();
            this.scrollCount = 0;
            this.loading = false;
          }, 3000);
        }
      }
    } else {
      // Reset if user scrolls up
      this.scrollCount = 0;
    }
  }
}
