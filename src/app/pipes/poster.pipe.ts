import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string, ...args: unknown[]): string {
    if (poster === null) {
      return './assets/img/no-image.jpg';
    } else {
      return 'http://image.tmdb.org/t/p/w500' + poster;
    }
  }

}
