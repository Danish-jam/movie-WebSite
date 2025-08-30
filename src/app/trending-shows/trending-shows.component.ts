import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-trending-shows',
  templateUrl: './trending-shows.component.html',
  styleUrls: ['./trending-shows.component.css']
})
export class TrendingShowsComponent implements OnInit{

  @ViewChild('slider') slider!: ElementRef;
  trendingShows: any
  id: number | undefined;
  showLeftBtn : boolean = false;
  showRightBtn : boolean = true;
  constructor(private apiService: MovieService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.apiService.getTrending("tv", 1).subscribe((res) => {
      this.trendingShows = res.results
      console.log(res);
      
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
