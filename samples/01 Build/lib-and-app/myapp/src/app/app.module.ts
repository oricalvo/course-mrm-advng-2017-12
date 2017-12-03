import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyModule} from "mylib";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
