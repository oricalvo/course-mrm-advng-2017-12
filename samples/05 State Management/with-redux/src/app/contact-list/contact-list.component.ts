import { Component, OnInit } from '@angular/core';
import {appStore} from '../../app.store';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get contacts() {
    return appStore.getState().contacts;
  }
}
