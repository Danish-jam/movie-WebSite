import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //json-server --watch movie.json --port 4300
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://api.themoviedb.org/3'
  private apiKey = 'dd4d819639705d332d531217b4f7c6b6'; // your API key
  private language = 'en-US';

  getCategory(category: string, page: number, mediaType: string): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${mediaType}/${category}`, { params })
  }

  getYouTubeVideo(id: number, mediaType: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/videos`, { params })
  }

  getTrending(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/trending/${media}/week`, { params })
  }

  getCurrenltyTvshow(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${media}/on_the_air`, { params });
  }

  getPopular(media: 'movie' | 'tv', page: number = 1): Observable<any> {
    const params = this.buildParams({
      language: 'en-US',
      page: page.toString()
    });

    return this.http.get(`${this.apiUrl}/${media}/popular`, { params });
  }


  getRated(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${media}/top_rated`, { params });
  }

  getUpComing(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${media}/upcoming`, { params });
  }

  getNowPlaying(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${media}/now_playing`, { params });
  }

  getTvDiscover(page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/discover/tv`, { params })
  }

  getAiringTodayTV(media: string, page: number): Observable<any> {
    const params = this.buildParams({ language: 'en-US', page: page.toString() });
    return this.http.get(`${this.apiUrl}/${media}/airing_today`, { params });
  }

  getUpcomingMovies(page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/movie/upcoming`, { params })
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}`, { params: this.buildParams({}) })
  }

  getMovieFullDetails(id: number): Observable<any> {
    const params = this.buildParams({
      append_to_response: 'videos,credits,images,external_ids,release_dates',
      include_image_language: 'en'
    });

    return this.http.get(`${this.apiUrl}/movie/${id}`, { params })
  }


  getTvShowFullDetails(id: number): Observable<any> {
    const params = this.buildParams({
      append_to_response: 'videos,credits,images,external_ids,release_dates',
      include_image_language: 'en'
    });

    return this.http.get(`${this.apiUrl}/tv/${id}`, { params })
  }

  searchMulti(query: string, page: number = 1): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/multi', {
      params: {
        api_key: 'dd4d819639705d332d531217b4f7c6b6',
        language: 'en-US',
        query: query,
        page: page.toString()
      }
    });
  }

  getRecommended(id: number, page: number, mediaType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/recommendations`, { params: this.buildParams({}) })
  }

  getPersonDetails(id: number): Observable<any> {
    const params = this.buildParams({
      append_to_response: 'images,combined_credits,external_ids',
      include_image_language: 'en'
    });

    return this.http.get(`${this.apiUrl}/person/${id}`, { params })
  }


  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams().set('api_key', this.apiKey).set('language', this.language);
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }




  // private handleError(error: any): Observable<never> {
  //   console.error('An error occurred', error);
  //   return throwError(() => new Error('Something went wrong'));
  // }
}
