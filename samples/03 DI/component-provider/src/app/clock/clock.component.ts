import { Component, OnInit } from '@angular/core';
import {MyService} from '../my.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  providers: [],
  viewProviders: [],
})
export class ClockComponent implements OnInit {

  constructor(my: MyService) {
    console.log("clock", my);
  }

  ngOnInit() {
  }

}
