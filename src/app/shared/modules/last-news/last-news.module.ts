import {NgModule} from '@angular/core';
import {LastNewsComponent} from './last-news.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslocoModule} from '@ngneat/transloco';

@NgModule({
  declarations: [LastNewsComponent],
  imports: [
    RouterModule,
    CommonModule,
    TranslocoModule
  ],
  exports: [
    LastNewsComponent
  ],
  providers: []
})
export class LastNewsModule { }
