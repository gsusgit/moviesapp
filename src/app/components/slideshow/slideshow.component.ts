import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import Swiper, { Autoplay} from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];
  mySwiper: Swiper;
  constructor() { }
  ngOnInit(): void {
    // console.log(this.movies);
  }
  ngAfterViewInit(): void {
    Swiper.use([Autoplay]);
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
      }
    });
  }
  onSlideNext(): any {
    this.mySwiper.slideNext();
  }
  onSlidePrev(): any {
    this.mySwiper.slidePrev();
  }
}
