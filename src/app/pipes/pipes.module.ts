import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureUrlPipe } from './secure-url.pipe';
import { PosterPipe } from './poster.pipe';


@NgModule({
  declarations: [SecureUrlPipe, PosterPipe],
  exports: [
    SecureUrlPipe,
    PosterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
