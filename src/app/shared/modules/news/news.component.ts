import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {iNews} from '@shared/interfaces/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  @Input() newsCount = 4;
  @Input() addToHeader;
  @Input() hasMainNews = false;

  header: string;
  ngUnsubscribe = new Subject();
  some: iNews[] = [{
    url: 'news',
    image: 'assets/images/Stanytsia-Luhanska.jpg',
    header: 'Ситуація на КПВВ: в суботу через лінію розмежування можна пройти лише через "Станицю Луганську"',
    date: new Date(),
    author: 'Наталя Жукова',
    title: `21 листопада фактично працює на пропуск громадян лише один контрольний пункт в’їзду-виїзду.
       До 11-ї ранку тут вже пройшли майже 400 людей. Хоча з українського боку відкриті всі КПВВ. `
  }, {
    url: 'news',
    image: 'assets/images/Stanytsia-Luhanska.jpg',
    header: 'Ситуація на КПВВ: в суботу через лінію розмежування можна пройти лише через "Станицю Луганську"',
    date: new Date(),
    author: 'Наталя Жукова',
    title: `21 листопада фактично працює на пропуск громадян лише один контрольний пункт в’їзду-виїзду.
       До 11-ї ранку тут вже пройшли майже 400 людей. Хоча з українського боку відкриті всі КПВВ. `
  }, {
    url: 'news',
    image: 'assets/images/Stanytsia-Luhanska.jpg',
    header: 'Ситуація на КПВВ: в суботу через лінію розмежування можна пройти лише через "Станицю Луганську"',
    date: new Date(),
    author: 'Наталя Жукова',
    title: `21 листопада фактично працює на пропуск громадян лише один контрольний пункт в’їзду-виїзду.
       До 11-ї ранку тут вже пройшли майже 400 людей. Хоча з українського боку відкриті всі КПВВ. `
  }, {
    url: 'news',
    image: 'assets/images/Stanytsia-Luhanska.jpg',
    header: 'Ситуація на КПВВ: в суботу через лінію розмежування можна пройти лише через "Станицю Луганську"',
    date: new Date(),
    author: 'Наталя Жукова',
    title: `21 листопада фактично працює на пропуск громадян лише один контрольний пункт в’їзду-виїзду.
       До 11-ї ранку тут вже пройшли майже 400 людей. Хоча з українського боку відкриті всі КПВВ. `
  }, {
    url: 'news',
    image: 'assets/images/Stanytsia-Luhanska.jpg',
    header: 'Ситуація на КПВВ: в суботу через лінію розмежування можна пройти лише через "Станицю Луганську"',
    date: new Date(),
    author: 'Наталя Жукова',
    title: `21 листопада фактично працює на пропуск громадян лише один контрольний пункт в’їзду-виїзду.
       До 11-ї ранку тут вже пройшли майже 400 людей. Хоча з українського боку відкриті всі КПВВ. `
  }];

  constructor(private translate: TranslocoService) {
  }

  ngOnInit() {
    this.translate.langChanges$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        !!this.addToHeader ? this.header = `: ${this.addToHeader[res]}` : this.header = '';
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
