import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  musicPlay = false;
  language: string[] | {id: string, label: string}[];
  activeLang: string;

  constructor(private translateService: TranslocoService) { }

  ngOnInit() {
    this.language = this.translateService.getAvailableLangs();
    this.activeLang = this.translateService.getActiveLang();
  }

  musicStatus() {
    this.musicPlay = !this.musicPlay;
  }

  changeLangs(e) {
   this.translateService.setActiveLang(e);
  }
}
