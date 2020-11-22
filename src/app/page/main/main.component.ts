import {Component, OnDestroy, OnInit} from '@angular/core';
import {projectInMain} from '@assets/config/config.carousel';
import {ProjectOnMainPageService} from '@shared/services/project-on-main-page.service';
import {iProjOnMain} from '@shared/interfaces/project.model';
import {TranslocoService} from '@ngneat/transloco';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  customOptions = projectInMain;
  slidesStore: iProjOnMain[];
  setMainNews = 5;
  activeLang: string;
  ngUnsubscribe = new Subject();

  newsType = {
    ru: 'Донецк',
    ua: 'Донецьк'
  };

  constructor(private projServiceData: ProjectOnMainPageService,
              private language: TranslocoService) {
  }

  ngOnInit() {
    this.language.langChanges$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
      this.activeLang = res;
    });
    this.slidesStore = this.projServiceData.getData();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
