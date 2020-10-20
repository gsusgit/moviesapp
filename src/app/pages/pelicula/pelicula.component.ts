import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  videoUrl: string;
  id: string;
  movie: MovieResponse;
  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute,
              private location: Location) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasService.getVideoKey(this.id).subscribe(respuesta => {
      this.videoUrl = 'https://www.youtube.com/embed/' + respuesta;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.getPelicula(params.id).subscribe(movie => {
        console.log(movie);
        this.movie = movie;
      });
    });
  }
  volverAtras(): void {
    this.location.back();
  }
}
