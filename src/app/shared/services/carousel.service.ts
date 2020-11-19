import {Injectable} from '@angular/core';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  carouselData = [
    {
      id: 1,
      ua: {
        title: 'title 1 ua',
        describe: 'describe 1 ua',
      },
      ru: {
        title: 'title 1 ru',
        describe: 'describe 1 ru',
      },
      src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/photo_2020-10-26_09-53-39-768x576.jpg',
      url: 'url_1'
    },
    {
      id: 2,
      ua: {
        title: 'title 2 ua',
        describe: 'describe 2 ua',
      },
      ru: {
        title: 'title 2 ru',
        describe: 'describe 2 ru',
      },
      src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/RTS36YOC.jpg',
      url: 'url_2'
    },
    {
      id: 3,
      ua: {
        title: 'title 3 ua',
        describe: 'describe 3 ua',
      },
      ru: {
        title: 'title 3 ru',
        describe: 'describe 3 ru',
      },
      src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/IMG_20190912_211039-768x576.jpg',
      url: 'url_3'
    },
    {
      id: 4,
      ua: {
        title: 'title 4 ua',
        describe: 'describe 4 ua',
      },
      ru: {
        title: 'title 4 ru',
        describe: 'describe 4 ru',
      },
      src: 'https://freeradio.com.ua/wp-content/uploads/2020/10/svynky-768x509.jpg',
      url: 'url_4'
    }
  ];

  constructor() {
  }

  getData() {
    return this.carouselData;
  }
}
