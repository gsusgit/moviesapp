import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import {PipesModule} from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
    FormsModule
  ],
    exports: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent,
        ScrollTopComponent
    ]
})
export class ComponentsModule { }
