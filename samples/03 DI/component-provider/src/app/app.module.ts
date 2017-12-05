import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyService} from './my.service';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    MyCommonModule.forRoot(),
  ],
  providers: [
    MyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(my: MyService){
    console.log("module", my);
  }
}
