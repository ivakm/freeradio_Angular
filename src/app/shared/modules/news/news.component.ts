import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  @Input() newsCount: number;
  @Input() addToHeader = {
    ru: 'Донецк',
    ua: 'Донецьк'
  };

  header: string;
  ngUnsubscribe = new Subject();

  constructor(private translate: TranslocoService) {
  }

  ngOnInit() {
    this.translate.langChanges$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        !!this.addToHeader ? this.header = `: ${this.addToHeader[res]}` : '';
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
