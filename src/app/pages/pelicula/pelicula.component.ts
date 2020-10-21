import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import {Cast} from '../../interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  videoUrl: string;
  videoUrlOk: string;
  videoUrlVacio = '';
  id: string;
  movie: MovieResponse;
  genres: string[] = [];
  cast: Cast[] = [];
  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute,
              private location: Location) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasService.getVideoKey(this.id).subscribe(respuesta => {
      this.videoUrlOk = 'https://www.youtube.com/embed/' + respuesta;
      this.videoUrl = 'https://www.youtube.com/embed/' + respuesta;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.getPelicula(params.id).subscribe(movie => {
        this.movie = movie;
        for (const genre of this.movie.genres) {
          this.genres.push(genre.name);
        }
      });
      this.peliculasService.getCast(params.id).subscribe(cast => {
        this.cast = cast;
      });
    });
  }
  stopVideo(): void {
    this.videoUrl = this.videoUrlVacio;
  }
  startVideo(): void {
    this.videoUrl = this.videoUrlOk;
  }
  volverAtras(): void {
    this.location.back();
  }
}
