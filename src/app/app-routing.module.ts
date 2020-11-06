import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '@page/main/main.component';
import {NewsPageComponent} from '@page/news/news-page.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
