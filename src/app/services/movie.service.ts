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


  getNowPlaying(mediaType: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${mediaType}/now_playing`, { params })
  }

  getYouTubeVideo(id: number, mediaType: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/videos`, { params })
  }
  getTrending(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/trending/${media}/week`, { params })
  }

  getTvDiscover(page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/discover/tv`, { params })
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

  search(query: string, page: number): Observable<any> {
    const params = this.buildParams({ query, page: page.toString() });
    return this.http.get(`${this.apiUrl}/search/multi`, { params })
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
