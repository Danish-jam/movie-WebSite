import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  searchResults: any[] = [];
  query: string = '';
  loading: boolean = true
  constructor(private route: ActivatedRoute, private apiSer: MovieService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';  // use 'q' because you passed q in onSearch()
      if (this.query) {
        setTimeout(() => {
             this.performSearch(this.query)
             this.loading = false
        }, 3000);
      }
    });
  }




  performSearch(query: string) {
    this.apiSer.searchMulti(query, 1).subscribe((response: any) => {
      this.searchResults = response.results
      console.log("Responsive", this.searchResults);
    })

  }
}
