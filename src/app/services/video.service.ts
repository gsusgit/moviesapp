import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'https://api.themoviedb.org/3/movie/';
  videoId: string;
  get params(): any {
    return {
      api_key: 'ea2ea434b3f0a962e8e6ded798bd1942',
      language: 'en-US'
    };
  }
  constructor(private http: HttpClient) {}
  getVideoKay(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/videos`,
      {params: this.params}).pipe(map((resp) => {
        return resp.results[0].key;
    }));
  }
}
