import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from '@shared/modules/carousel/carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CarouselComponent],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ]
})
export class CarouselSharedModule { }
