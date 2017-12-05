import { Component } from '@angular/core';
import {MyService} from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService],
})
export class AppComponent {
  title = 'app';

  constructor(my: MyService){
    console.log("app", my);
  }
}
