import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesWebsit';
  isSearchActive = false;
  searchQuery: string = '';

  constructor(private router: Router) { }

  toggleSearchBar(event: Event) {
    event.stopPropagation();
    this.isSearchActive = true;
  }

  closeSearchBar() {
    this.isSearchActive = false;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery.trim() }
      });
    } else {
      this.router.navigate(['/home']); // Redirect if empty
    }
  }

}
