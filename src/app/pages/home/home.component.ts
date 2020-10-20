import {Component, HostListener, OnInit} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesCartelera: Movie[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera()
      .subscribe(respuesta => {
        this.movies = respuesta.results;
        this.moviesCartelera = respuesta.results;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (pos > max) {
      if (this.peliculasService.cargando) {
        return;
      }
      this.peliculasService.getCartelera().subscribe(respuesta => {
        this.moviesCartelera.push(...respuesta.results);
      });
    }
  }

}
