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
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { RatedMoviesComponent } from './rated-movies/rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NowplayingMoviesComponent } from './nowplaying-movies/nowplaying-movies.component';
import { PopularTvshowComponent } from './popular-tvshow/popular-tvshow.component';
import { TopratedTvshowComponent } from './toprated-tvshow/toprated-tvshow.component';
import { CurrentlyTvshowComponent } from './currently-tvshow/currently-tvshow.component';
import { AiringtodayTvshowComponent } from './airingtoday-tvshow/airingtoday-tvshow.component';


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
    path: "Movie",
    children: [
      {
        path: "Category",
        children: [
          {
            path: "Popular",
            component: PopularMoviesComponent

          },
          {
            path: "TopRated",
            component: RatedMoviesComponent
          },
          {
            path: "UpComing",
            component: UpcomingMoviesComponent
          },
          {
            path: "NowPlaying",
            component: NowplayingMoviesComponent
          },
        ]
      },
    ]
  },
  {
    path: "Trending",
    children: [
      { path: "TvShows", component: AllTvShowsComponent }
    ]
  },
  {
    path: "TvShow",
    children: [
      {
        path: "Category",
        children: [
          {
            path: "Popular",
            component: PopularTvshowComponent
          }, {
            path: "TopRated",
            component: TopratedTvshowComponent
          }, {
            path: "Currently",
            component: CurrentlyTvshowComponent
          }, {
            path: "AiringToday",
            component: AiringtodayTvshowComponent
          }
        ]
      },
    ]
  },
  {
    path: "Movie/:id",
    component: InfoMovieComponent
  }, {
    path: 'Search/:id',
    component: InfoMovieComponent
  },
  {
    path: "person/:id",
    component: PersonDetailsComponent
  }, {
    path: "tv",
    component: AllTvShowsComponent
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
    path: "**",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
