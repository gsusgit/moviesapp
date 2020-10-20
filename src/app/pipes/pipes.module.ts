import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';
import { PosterPipe } from './poster.pipe';


@NgModule({
  declarations: [DomseguroPipe, PosterPipe],
  exports: [
    DomseguroPipe,
    PosterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
