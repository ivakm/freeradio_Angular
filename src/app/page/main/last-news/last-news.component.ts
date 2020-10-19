import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {LastNewsService} from '../../../shared/services/last-news.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit, OnDestroy, OnChanges {

  newsArray = [
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

  private ngUnsubscribe = new Subject();
  private activeLang: string;

  constructor(private lastNews: LastNewsService,
              private translocoService: TranslocoService) {
  }

  ngOnInit() {
    this.translocoService.langChanges$.subscribe(res => {
      this.activeLang = res;
    });
    this.lastNews.getLastNews()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(res => {
      // some action
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
