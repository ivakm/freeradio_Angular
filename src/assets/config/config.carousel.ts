import {OwlOptions} from 'ngx-owl-carousel-o';

export const customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoplay: true,
  dots: false,
  navSpeed: 700,
  margin: 10,
  animateIn: true,
  animateOut: true,
  navText: ['<', '>'],
  responsive: {
    0: {
      items: 3
    }
  },
  nav: true
};
