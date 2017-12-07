import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";

import { AppComponent } from './app.component';
import {counterReducer} from './counter.reducer';
import {AppState} from './appState';


const initialState: AppState = {
  counter: 0,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }, {
      initialState
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
