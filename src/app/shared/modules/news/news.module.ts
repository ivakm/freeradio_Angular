import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {TranslocoModule} from '@ngneat/transloco';
import {MainNewsComponent} from './main-news/main-news.component';

@NgModule({
  declarations: [NewsComponent, MainNewsComponent],
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ]
})
export class NewsModule {
}
