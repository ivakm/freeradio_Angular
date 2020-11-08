import {Component, OnDestroy, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {TranslocoService} from '@ngneat/transloco';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  // https://www.npmjs.com/package/ngx-owl-carousel-o
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: false,
    dots: true,
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

  slidesStore = [
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
    }, {
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
    }, {
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
    }];
  private activeLang: string;
  private ngUnsubscribe = new Subject();

  constructor(private translateService: TranslocoService) {
  }

  ngOnInit() {
    this.translateService.langChanges$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.activeLang = res;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
