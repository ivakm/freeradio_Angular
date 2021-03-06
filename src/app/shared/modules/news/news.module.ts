import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {TranslocoModule} from '@ngneat/transloco';
import {MainNewsComponent} from './main-news/main-news.component';
import {TruncateTextPipe} from '@shared/pipes/truncate-text.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NewsComponent,
    MainNewsComponent,
    TruncateTextPipe
  ],
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule
  ]
})
export class NewsModule {
}
