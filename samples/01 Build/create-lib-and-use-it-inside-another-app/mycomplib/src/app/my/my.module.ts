import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyModule { }
