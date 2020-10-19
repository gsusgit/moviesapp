import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private URL = 'https://api.themoviedb.org/3/movie/';
  private API_KEY = 'ea2ea434b3f0a962e8e6ded798bd1942';
  constructor(private http: HttpClient) { }
  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(`https://api.themoviedb.org/3/movie/now_playing?api_key=ea2ea434b3f0a962e8e6ded798bd1942&language=es-ES&page=1`);
  }
}
