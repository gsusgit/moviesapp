import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';
import { tap } from 'rxjs/operators';

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
    console.log('cargando API');
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,
      {params: this.params}).pipe(tap(() => {
        this.carteleraPage++;
        this.cargando = false;
    }));
  }
}
