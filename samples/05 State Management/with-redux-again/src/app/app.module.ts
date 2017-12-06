import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppStore, STORE_PROVIDER} from '../app.store';
import {ContactActions} from './actions/contact.actions';
import {HttpClientModule} from '@angular/common/http';
import { ContactItemComponent } from './contact-item/contact-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    STORE_PROVIDER,
    ContactActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: AppStore, contactActions: ContactActions) {
    store.dispatch(contactActions.reload());
  }
}
