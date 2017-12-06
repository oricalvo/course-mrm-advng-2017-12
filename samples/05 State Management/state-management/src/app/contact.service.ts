import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {
  all: Contact[];
  contacts: Contact[];
  searchStr: string = "";

  constructor(private httpClient: HttpClient) {
    this.reload();
  }

  @Activity()
  async reload() {
    this.all = await this.loadContactsFromServer();

    this.onAllChanged();
  }

  @Activity()
  add(name: string) {
    const contact = {
      id: -1,
      name: name,
    };

    this.contacts.push(contact);
  }

  @Activity()
  find(searchStr: string) {
    this.searchStr = searchStr;

    this.rerunFilter();
  }

  private onAllChanged() {
    this.rerunFilter();
  }

  private rerunFilter() {
    this.contacts = this.all.filter(c => c.name.toLowerCase().indexOf(this.searchStr.toLowerCase())!=-1);
  }

  private async loadContactsFromServer(): Promise<Contact[]> {
    const data = await this.httpClient.get<Contact[]>("assets/contacts.json").toPromise();

    return data;
  }
}

export interface Contact {
  id: number;
  name: string;
}

export function Activity() {
  return function(target, propName, desc) {
    const original = target[propName];

    target[propName] = function() {
      const retVal = original.apply(this, arguments);

      if(retVal && retVal.then) {
        retVal.then(function() {
          window["detectChanges"]();
        });
      }
      else {
        window["detectChanges"]();
      }

      return retVal;
    }

    return target;
  }
}
