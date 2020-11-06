import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/modules/header/header.component';
import {FooterComponent} from './shared/modules/footer/footer.component';
import {MainComponent} from './page/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {NewsComponent} from './page/news/news.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import { PopularNewsComponent } from './page/main/popular-news/popular-news.component';
import {LastNewsModule} from './shared/modules/last-news/last-news.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsComponent,
    PopularNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    TranslocoRootModule,
    LastNewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
