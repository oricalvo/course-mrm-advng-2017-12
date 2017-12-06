import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SearchComponent } from './search/search.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import {ContactService} from './contact.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SearchComponent,
    NewContactComponent,
    RefreshComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    window["detectChanges"] = function() {
      console.log("Change detection");

      appRef.tick();
    }
  }
}
