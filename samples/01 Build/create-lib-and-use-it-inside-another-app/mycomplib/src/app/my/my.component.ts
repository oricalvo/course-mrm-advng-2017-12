import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  inc() {
    ++this.counter;
  }
}
