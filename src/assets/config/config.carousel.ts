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

export const projectInMain: OwlOptions = {
  loop: true,
  autoplay: true,
  dots: false,
  navSpeed: 700,
  margin: 10,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: ['&#8592;', '&#8594;'],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
};
