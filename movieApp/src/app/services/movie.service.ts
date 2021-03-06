import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'e614b2f';

  constructor( private http: HttpClient ) { }

  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&apiKey=${this.apiKey}`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
      })
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }

}
