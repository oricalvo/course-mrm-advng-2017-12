import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../app.state';
import {AppStore} from '../../app.store';
import {ContactActions} from '../actions/contact.actions';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  name: string;

  constructor(private store: AppStore, private contactActions: ContactActions) { }

  ngOnInit() {
  }

  update(contact: Contact) {
    const newContact = {
      ...contact,
      name: this.name,
    };

    this.store.dispatch(this.contactActions.update(newContact));
  }
}
