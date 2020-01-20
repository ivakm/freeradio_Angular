import {Component, OnInit, ViewChild, AfterViewInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  musicPlay: boolean = false;
  language = ['ru', 'ua'];
  dropNewsMenu = false;
  selectedUa: string = 'ua';

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
