
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-info-tvshows',
  templateUrl: './info-tvshows.component.html',
  styleUrls: ['./info-tvshows.component.css']
})
export class InfoTvshowsComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef;
  showLeftBtn: boolean = false;
  showRightBtn: boolean = true;
  id!: any;
  selectedTvShow: any;
  activeTab: string = 'overview';
  hours !: number
  minutes !: number
  recommendationMovies: any
  constructor(private apiService: MovieService, private router: ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.apiService.getTvShowFullDetails(this.id).subscribe(response => {
      this.selectedTvShow = response;
      console.log(this.selectedTvShow);
      this.convertMinutesToHoursAndMinutes(this.selectedTvShow.runtime)
    });

    this.apiService.getRecommended(this.id, 1, "tv").subscribe(response => {
      this.recommendationMovies = response.results;
      console.log(response);
    });

    // this.apiService.getYouTubeVideo(this.id, "movie").subscribe(response => {
    //   this.recommendationMovies = response;
    //   console.log(response);

    // });
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  convertMinutesToHoursAndMinutes(totalMinutes: number): string {
    if (!totalMinutes || totalMinutes <= 0) {
      return '0m';
    }

    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;

    if (this.hours > 0 && this.minutes > 0) {
      return `${this.hours}h ${this.minutes}m`;
    } else if (this.hours > 0) {
      return `${this.hours}h`;
    } else {
      return `${this.minutes}m`;
    }
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

  goToTvShows(id: number) {
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/TvShows', id]);
    });
  }
}