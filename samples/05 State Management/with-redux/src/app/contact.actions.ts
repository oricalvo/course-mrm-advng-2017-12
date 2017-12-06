import {HttpClient} from '@angular/common/http';

export class ContactActions {
  constructor(private http: HttpClient) {
  }

  loadContacts() {
    return {
      type: "LOAD_CONTACTS"
    };
  }

  addContact(contact: Contact) {
    return {
      type: "LOAD_CONTACTS",
      contact,
    };
  }

}
