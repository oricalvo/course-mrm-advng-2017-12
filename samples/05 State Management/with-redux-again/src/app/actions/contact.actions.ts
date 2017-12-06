import {HttpClient} from '@angular/common/http';
import {Contact} from '../../app.state';
import {Injectable} from '@angular/core';

@Injectable()
export class ContactActions {
  constructor(private http: HttpClient) {
  }

  reload() {
    return async (dispatch) => {
      const contacts = await this.http.get<Contact[]>("assets/contacts.json").toPromise();

      dispatch(this.setContacts(contacts));
    };
  }

  setContacts(contacts: Contact[]) {
    return {
      type: "SET_CONTACTS",
      contacts,
    };
  }

  update(newContact: Contact) {
    return {
      type: "UPDATE_CONTACT",
      contact: newContact,
    };
  }
}

