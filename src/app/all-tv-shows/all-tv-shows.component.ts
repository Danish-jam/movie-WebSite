import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-tv-shows',
  templateUrl: './all-tv-shows.component.html',
  styleUrls: ['./all-tv-shows.component.css']
})
export class AllTvShowsComponent implements OnInit {


  @ViewChild('slider') slider!: ElementRef;
  popularShow : any
  nowPlayingShow : any
  airingTodayShow : any
  onTheAirShow : any
  id: number | undefined;
  showLeftBtn: boolean = false;
  showRightBtn: boolean = true;
  loading: boolean = true
  constructor(private apiService: MovieService, private router: ActivatedRoute) { }
 ngOnInit() {

    this.apiService.getCategory("popular", 1, "tv").subscribe((res) => {
      setTimeout(() => {
        this.popularShow = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("top_rated", 1, "tv").subscribe((res) => {
      setTimeout(() => {
        this.nowPlayingShow = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("airing_today", 1, "tv").subscribe((res) => {
      setTimeout(() => {
        this.airingTodayShow = res.results
        this.loading = false
      }, 3000);
    })

    this.apiService.getCategory("top_rated", 1, "tv").subscribe((res) => {
      setTimeout(() => {
        this.onTheAirShow = res.results
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

  // constructor(private apiService: MovieService) {

  // }


  // ngOnInit(): void {

  //   setTimeout(() => {
  //     this.loadTrendingMovies();
  //     this.loading = false;
  //   }, 3000);

  // }

  // loadTrendingMovies(): void {
  //   this.apiService.getTrending('tv', this.page).subscribe((res) => {
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