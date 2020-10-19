import { Component, OnInit } from '@angular/core';
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

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera()
      .subscribe(respuesta => {
        this.movies = respuesta.results;
      });
  }

}
