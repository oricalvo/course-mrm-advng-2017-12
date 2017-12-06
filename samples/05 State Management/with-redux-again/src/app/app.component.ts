import {Component} from '@angular/core';
import {AppStore} from '../app.store';
import {Contact} from '../app.state';
import {ContactActions} from './actions/contact.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: AppStore, private contactActions: ContactActions) {
    console.log("store", store);
  }

  get state() {
    return this.store.getState();
  }

  trackByFn(index, item) {
    return index;
  }
}
