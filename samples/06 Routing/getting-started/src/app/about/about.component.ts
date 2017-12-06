import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log("About.ctor");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("About.destroy");
  }
}
