import {forwardRef, Inject, Injectable} from '@angular/core';
import {AppComponent} from './app.component';

@Injectable()
export class MyService {

  constructor(@Inject(forwardRef(()=>AppComponent)) clock: AppComponent) {
    console.log("clock", clock);
  }

}
