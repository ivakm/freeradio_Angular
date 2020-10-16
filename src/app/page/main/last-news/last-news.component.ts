import {Component, OnDestroy, OnInit} from '@angular/core';
import {LastNewsService} from '../../../shared/services/last-news.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit, OnDestroy {

  newsArray = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, odio.',
      isImportant: true,
      date: '2020-10-16 15:00',
      link: 'news-name1'
    }, {
      text: 'Lorem ipsum dolor sit amet.',
      isImportant: false,
      date: '2020-10-16 15:20',
      link: 'news-link2'
    }];

  private ngUnsubscribe = new Subject();

  constructor(private lastNews: LastNewsService) {
  }

  ngOnInit() {
    this.lastNews.getLastNews()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(res => {
      // some action
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
