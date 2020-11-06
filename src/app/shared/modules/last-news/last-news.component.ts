import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs';
import {TranslocoService} from '@ngneat/transloco';
import {takeUntil} from 'rxjs/operators';
import {LastNewsService} from '../../services/last-news.service';
import {log} from 'util';
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
const covidArray = [ {
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
export class LastNewsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() setNewsType;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getNewsArray(name): iLastNews[] {
    const availableArray = {
      newsArray,
      covidArray
    };

    return JSON.parse(JSON.stringify(availableArray[name]));
  }

}
