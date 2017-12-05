import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { GenericItemComponent } from './generic-item/generic-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    GenericItemComponent
  ],
  entryComponents: [
    ContactItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
