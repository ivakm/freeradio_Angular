import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TranslocoService} from '@ngneat/transloco';
import {LastNewsService} from '../../services/last-news.service';
import {iLastNews} from '../../interfaces/last-news.model';

const newsArray = [
  {
    text: {
      ua: 'якийсь текст українською',
      ru: 'какой-то текст на русском'
    },
    isImportant: true,
    date: '2020-10-16 15:00',
    link: 'news-name1'
  }, {
    text: {
      ua: 'якийсь текст українською 2',
      ru: 'какой-то текст на русском 2'
    },
    isImportant: false,
    date: '2020-10-16 15:20',
    link: 'news-link2'
  }];
const covidArray = [{
  text: {
    ua: 'Від Ковіду сьогодні померло 9000 людей',
    ru: 'От Ковид сегодня умерло 9000 человек'
  },
  isImportant: false,
  date: '2020-10-16 15:20',
  link: 'covid-link'
}];

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit, OnDestroy {
  @Input() setNewsType: string;

  private ngUnsubscribe = new Subject();
  private activeLang: string;
  private choseArray: iLastNews[] = [];

  constructor(private lastNews: LastNewsService,
              private translocoService: TranslocoService) {
  }

  ngOnInit() {
    this.choseArray = this.getNewsArray(this.setNewsType);
    this.translocoService.langChanges$.subscribe(res => {
      this.activeLang = res;
    });

    /*  this.lastNews.getLastNews()
        .pipe(
          takeUntil(this.ngUnsubscribe)
        ).subscribe(res => {
        // some action
      });*/
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  get ActiveLanguage() {
    return this.activeLang;
  }

  getNewsArray(name): iLastNews[] {
    /*
    const availableArray = {
      newsArray: {
      url: `newsUrl`
      },
      covidArray: {
      url: `covidUrl`
      }

      this.lastNews.get(availableArray[name].url, {
      language: this.getActiveLanguage
      })
    };

    **/
    const availableArray = {
      newsArray,
      covidArray
    };

    return JSON.parse(JSON.stringify(availableArray[name]));
  }

}
