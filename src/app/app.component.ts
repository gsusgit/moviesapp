import { Component } from '@angular/core';
import { PeliculassService } from './services/peliculass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private peliculasService: PeliculassService) {
    this.peliculasService.getCartelera()
      .subscribe(respuesta => {
        console.log(respuesta.results);
      });
  }
  title = 'moviesapp';
}
