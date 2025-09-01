import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {

  @ViewChild('slider') slider!: ElementRef;
  trendingMovies: any
  id: number | undefined;
  showLeftBtn : boolean = false;
  showRightBtn : boolean = true;
  loading : boolean = true
  constructor(private apiService: MovieService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.apiService.getTrending("movie", 1).subscribe((res) => {
      setTimeout(() => {
      this.trendingMovies = res.results
      this.loading =  false
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
}


