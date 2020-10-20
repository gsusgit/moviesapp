import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  videUrl: string;
  public id: string;
  constructor(private videoService: VideoService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.videoService.getVideoKay(this.id).subscribe(respuesta => {
      this.videUrl = 'https://www.youtube.com/embed/' + respuesta;
    });
  }

}
