import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MyCommonModule.forChild(),
  ],
  declarations: []
})
export class LazyModule { }
