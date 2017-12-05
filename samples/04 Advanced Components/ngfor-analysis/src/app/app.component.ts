import {Component, Type} from '@angular/core';
import {ContactItemComponent} from './contact-item/contact-item.component';
import {ConvertItemToComponentType} from './generic-item/generic-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  convertItemToComponentType: ConvertItemToComponentType;

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    this.convertItemToComponentType = function(item): Type<any> {
      return ContactItemComponent;
    }
  }

  refresh() {
    this.contacts = [
      {"id": 1, "name": "OriXXX"},
      {"id": 2, "name": "Roni"},
      // {"id": 3, "name": "Udi"},
    ];

    // const tmp = this.contacts[0];
    // this.contacts[0] = this.contacts[1];
    // this.contacts[1] = tmp;
  }

  trackFn(index, item) {
    return index;
  }
}

interface Contact {
  id: number;
  name: string;
}
