import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // https://www.npmjs.com/package/ngx-owl-carousel-o
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  slidesStore = [{
    id: 1,
    title: '1',
    alt: '1',
    src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/photo_2020-10-26_09-53-39-768x576.jpg'
  }, {
    id: 2,
    title: '2',
    alt: '2',
    src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/RTS36YOC.jpg'
  }, {
    id: 3,
    title: '3',
    alt: '3',
    src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/IMG_20190912_211039-768x576.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
