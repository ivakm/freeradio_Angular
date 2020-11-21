import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit {

  @Input() data;
  @Input() hasMainNews = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    AOS.init();
  }

  refToPost() {
    this.router.navigate(['news'], {relativeTo: this.route});
  }

}
