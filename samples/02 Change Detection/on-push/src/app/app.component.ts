import { Component } from '@angular/core';
import {Contact} from './contact-index/contact-index.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];
  }

  change(){
    const contacts = this.contacts.concat([]);
    contacts[0] = {
      ... this.contacts[0],
      name: "XXX"
    };
    this.contacts = contacts;

    // this.contacts[0].name = "XXX";
  }
}
