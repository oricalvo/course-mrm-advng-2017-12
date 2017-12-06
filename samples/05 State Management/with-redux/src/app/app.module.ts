import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactActions} from './contact.actions';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContactActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
