import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { AllTrendingMoviesComponent } from './all-trending-movies/all-trending-movies.component';
import { AllTvShowsComponent } from './all-tv-shows/all-tv-shows.component';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { InfoTvshowsComponent } from './info-tvshows/info-tvshows.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "Movie",
    component: AllMoviesComponent
  },
  {
    path: "Trending",
    children: [
      { path: "Movies", component: AllTrendingMoviesComponent }
    ]
  },
  {
    path: "Trending",
    children: [
      { path: "TvShows", component: AllTvShowsComponent }
    ]
  },
  {
    path: "Movie/:id",
    component: InfoMovieComponent
  },
  {
    path: "person/:id",
    component: PersonDetailsComponent
  },{
    path: "tv",
    component : AllTvShowsComponent
  },
  {
    path: "TvShows/:id",
    component: InfoTvshowsComponent
  },
  {
    path: "search",
    component: SearchMoviesComponent
  },
  {
    path: 'Search/:id',
    component: InfoMovieComponent
  },
  {
    path: "**",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
