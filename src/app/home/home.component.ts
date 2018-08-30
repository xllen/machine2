import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array = ["http://www.fs-airman.com/tpl/default/Public/img/banner1.jpg",
          "http://www.fs-airman.com/tpl/default/Public/img/banner2.jpg",
          "http://www.fs-airman.com/tpl/default/Public/img/banner3.jpg",
          "http://www.fs-airman.com/tpl/default/Public/img/banner4.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
