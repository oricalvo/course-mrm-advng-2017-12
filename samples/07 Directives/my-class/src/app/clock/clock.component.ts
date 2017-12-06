import { Component, OnInit } from '@angular/core';
import {MyService} from '../my.service';
import {ComponentWithTooltip} from '../my-tooltip.directive';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  providers: [
    {provide: ComponentWithTooltip, useExisting: ClockComponent}
  ]
})
export class ClockComponent implements OnInit, ComponentWithTooltip {

  constructor() { }

  ngOnInit() {
  }

}
