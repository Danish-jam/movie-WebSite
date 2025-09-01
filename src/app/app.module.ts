import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieBannerComponentComponent } from './movie-banner-component/movie-banner-component.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { TrendingShowsComponent } from './trending-shows/trending-shows.component';
import { ContactComponent } from './contact/contact.component';
import { AllTrendingMoviesComponent } from './all-trending-movies/all-trending-movies.component';
import { AllTvShowsComponent } from './all-tv-shows/all-tv-shows.component';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { InfoTvshowsComponent } from './info-tvshows/info-tvshows.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { FormsModule } from '@angular/forms';
import { SilderComponent } from './silder/silder.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieBannerComponentComponent,
    TrendingMoviesComponent,
    AllMoviesComponent,
    HomeComponent,
    TrendingShowsComponent,
    ContactComponent,
    AllTrendingMoviesComponent,
    AllTvShowsComponent,
    InfoMovieComponent,
    PersonDetailsComponent,
    InfoTvshowsComponent,
    SearchMoviesComponent,
    SilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
