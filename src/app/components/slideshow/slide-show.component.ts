import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies-response';
import Swiper, { Autoplay } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];
  mySwiper: Swiper;
  constructor() { }
  ngOnInit(): void { }
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
