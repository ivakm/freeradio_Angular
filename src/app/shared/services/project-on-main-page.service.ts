import { Injectable } from '@angular/core';
import {iProjOnMain} from '@shared/interfaces/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectOnMainPageService {
  data: iProjOnMain[] = [
    {
      img: 'assets/images/project1.jpg',
      text: {
        ua: 'Текст українсьою номер 1',
        ru: 'Текст на русском номер 1'
      }
    }, {
      img: 'assets/images/project2.jpeg',
      text: {
        ua: 'Текст українсьою номер 2',
        ru: 'Текст на русском номер 2'
      }
    }
    ];
  constructor() { }

  getData() {
    return this.data;
  }
}
