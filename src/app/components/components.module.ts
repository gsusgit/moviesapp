import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slideshow/slide-show.component';
import { PosterGridComponent } from './poster-grid/poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PosterGridComponent,
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
        SlideShowComponent,
        PosterGridComponent,
        ScrollTopComponent
    ]
})
export class ComponentsModule { }
