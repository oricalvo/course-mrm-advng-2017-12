import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ModalService} from './modal.service';
import { AboutComponent } from './about/about.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ModalComponent
  ],
  entryComponents: [
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
