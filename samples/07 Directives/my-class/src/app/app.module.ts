import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyClassDirective } from './my-class.directive';
import { ClockComponent } from './clock/clock.component';
import {FormsModule} from '@angular/forms';
import { MyTooltipDirective } from './my-tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyClassDirective,
    ClockComponent,
    MyTooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
