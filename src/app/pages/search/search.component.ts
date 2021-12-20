import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text = '';
  empty = false;
  movies: Movie[] = [];
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.searchMovie(params.text).subscribe(movies => {
        this.text = params.text;
        if (movies.length === 0) {
          this.empty = true;
        } else {
          this.empty = false;
          this.movies = movies;
        }
      });
    });
  }
}
