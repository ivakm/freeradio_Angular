import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  musicPlay = false;
  language = ['ru', 'ua'];
  dropNewsMenu = false;
  selectedUa = 'ua';

  constructor() {}

@ViewChild('testButton', {static: true}) menu;
  ngOnInit() {}

 /* ngAfterViewInit(){
    this.menu.openMenu();
  }*/

  musicStatus() {
    this.musicPlay = !this.musicPlay;
  }
}
