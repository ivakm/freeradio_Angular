import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {TranslocoModule} from '@ngneat/transloco';



@NgModule({
  declarations: [NewsComponent],
  exports: [
    NewsComponent
  ],
    imports: [
        CommonModule,
        TranslocoModule
    ]
})
export class NewsModule { }
