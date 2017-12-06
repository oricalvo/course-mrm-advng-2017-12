import { Component, OnInit } from '@angular/core';
import {appState} from '../../appState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log("Home.ctor");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Home.destroy");
  }

  get state() {
    return appState;
  }
}
