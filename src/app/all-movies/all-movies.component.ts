import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  @ViewChild('slider') slider!: ElementRef;
  nowPlayingMovies: any
  popularMovies: any
  topRatedMovies: any
  upcomingMovies: any
  id: number | undefined;
  showLeftBtn: boolean = false;
  showRightBtn: boolean = true;
  loading: boolean = true
  constructor(private apiService: MovieService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.apiService.getCategory("popular", 1, "movie").subscribe((res) => {
      setTimeout(() => {
        this.popularMovies = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("now_playing", 1, "movie").subscribe((res) => {
      setTimeout(() => {
        this.nowPlayingMovies = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("upcoming", 1, "movie").subscribe((res) => {
      setTimeout(() => {
        this.upcomingMovies = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("top_rated", 1, "movie").subscribe((res) => {
      setTimeout(() => {
        this.topRatedMovies = res.results
        this.loading = false
      }, 3000);
    })
  }


  ngAfterViewInit() {
    this.updateButtons();
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => this.updateButtons(), 500);
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => this.updateButtons(), 500);
  }

  updateButtons() {
    const sliderEl = this.slider.nativeElement;
    const scrollLeft = sliderEl.scrollLeft;
    const scrollWidth = sliderEl.scrollWidth;
    const clientWidth = sliderEl.clientWidth;

    this.showLeftBtn = scrollLeft > 0;
    this.showRightBtn = scrollLeft + clientWidth < scrollWidth - 10;
  }



  // trendingMovies: any[] = [];
  // page: number = 1
  // loading = true;
  // @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  // scrollCount: number = 0; // counter for wheel down events
  // maxScrollCount: number = 6

  // ngOnInit(): void {
  //   setTimeout(() => {
  //           this.loadTrendingMovies();
  //           this.loading = false;
  //         }, 3000);
  // }

  // loadTrendingMovies(): void {
  //   this.apiService.getTrending('movie', this.page).subscribe((res) => {
  //     this.trendingMovies = [...this.trendingMovies, ...res.results];
  //   });
  // }


  // ; // threshold to trigger loading

  // onWheel(event: WheelEvent): void {
  //   const target = event.currentTarget as HTMLElement;
  //   const scrollTop = target.scrollTop;
  //   const scrollHeight = target.scrollHeight;
  //   const clientHeight = target.clientHeight;
  //   this.loading = true;
  //   // Only count downward scroll (deltaY > 0)
  //   if (event.deltaY > 0) {
  //     this.scrollCount++;

  //     // If user has scrolled 4 times downward, check for bottom
  //     if (this.scrollCount >= this.maxScrollCount) {
  //       if (scrollTop + clientHeight >= scrollHeight - 50) {
  //         setTimeout(() => {
  //           this.page++;
  //           this.loadTrendingMovies();
  //           this.scrollCount = 0;
  //           this.loading = false;
  //         }, 3000);
  //       }
  //     }
  //   } else {
  //     // Reset if user scrolls up
  //     this.scrollCount = 0;
  //   }
  // }

}

