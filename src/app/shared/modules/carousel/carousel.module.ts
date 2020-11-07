import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from '@shared/modules/carousel/carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [CarouselComponent],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class CarouselSharedModule { }
