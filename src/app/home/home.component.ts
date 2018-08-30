import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array = ["../../assets/banner1.jpg",
          "../../assets/banner2.jpg",
          "../../assets/banner3.jpg",
          "../../assets/banner4.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
