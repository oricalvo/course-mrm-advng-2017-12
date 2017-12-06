import { Component } from '@angular/core';
import {appStore} from '../app.store';
import {ContactActions} from './contact.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private actions: ContactActions) {
  }

  load() {
    appStore.dispatch(this.actions.loadContacts());
  }
}

