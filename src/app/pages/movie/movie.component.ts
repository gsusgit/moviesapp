import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  videoUrl: string;
  videoUrlOk: string;
  emptyVideoUrl = '';
  id: string;
  movie: MovieResponse;
  genres: string[] = [];
  cast: Cast[] = [];
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private gtm: GoogleTagManagerService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.moviesService.getVideoKey(this.id).subscribe(response => {
      this.videoUrlOk = 'https://www.youtube.com/embed/' + response;
      this.videoUrl = 'https://www.youtube.com/embed/' + response;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getMovie(params.id).subscribe(movie => {
        this.movie = movie;
        this.sendTag(this.movie);
        for (const genre of this.movie.genres) {
          this.genres.push(genre.name);
        }
      });
      this.moviesService.getCast(params.id).subscribe(val => this.cast = val.slice(0, 6));
    });
  }
  stopVideo(): void {
    this.videoUrl = this.emptyVideoUrl;
  }
  startVideo(): void {
    this.videoUrl = this.videoUrlOk;
  }
  goBack(): void {
    this.location.back();
  }
  sendTag(movie: any): void {
    this.gtm.pushTag({
      event: 'viewMovie',
      content: {
        title: movie.title,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        popularity: movie.popularity
      }
    });
  }
}
