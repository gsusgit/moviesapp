import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { tap, map } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl = 'https://api.themoviedb.org/3';
  public carteleraPage = 1;
  public cargando = false;
  constructor(private http: HttpClient) { }
  get params(): any {
    return {
      api_key: 'ea2ea434b3f0a962e8e6ded798bd1942',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    };
  }
  getCartelera(): Observable<CarteleraResponse> {
    if (this.cargando) {
      return;
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,
      {params: this.params}).pipe(tap(() => {
        this.carteleraPage++;
        this.cargando = false;
    }));
  }
  getTopRated(): Observable<CarteleraResponse> {
    if (this.cargando) {
      return;
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/popular`,
      {params: this.params}).pipe(tap(() => {
      this.carteleraPage++;
      this.cargando = false;
    }));
  }
  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: texto, include_adult: 'false'};
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {params})
      .pipe(
        map(respuesta => respuesta.results)
      );
  }
  getPelicula(id: string): Observable<MovieResponse> {
    const params = {...this.params};
    delete params.page;
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,
      {params});
  }
  getVideoKey(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/videos`,
      {params: this.params}).pipe(map((resp) => {
      return resp.results[0].key;
    }));
  }
  getCast(id: string): Observable<Cast[]> {
    const params = {api_key: this.params.api_key};
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`,
      {params}).pipe(
        map(resp => resp.cast)
    );
  }
}
