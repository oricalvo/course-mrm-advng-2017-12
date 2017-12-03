import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyModule} from './my/my.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
