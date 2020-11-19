import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CarouselService} from '@shared/services/carousel.service';
import {customOptions} from '@assets/config/config.carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  // https://www.npmjs.com/package/ngx-owl-carousel-o
  customOptions = customOptions;

  slidesStore;
  private activeLang: string;
  private ngUnsubscribe = new Subject();

  constructor(private translateService: TranslocoService,
              private carouselService: CarouselService) {
  }

  ngOnInit() {
    this.translateService.langChanges$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.activeLang = res;
      });
    this.slidesStore = this.carouselService.getData();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
