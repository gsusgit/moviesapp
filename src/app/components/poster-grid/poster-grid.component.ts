import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrls: ['./poster-grid.component.css']
})
export class PosterGridComponent implements OnInit {
  @Input() movies: Movie[];
  constructor() { }

  ngOnInit(): void { }

}
