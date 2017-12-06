import {Directive, Input, KeyValueDiffers} from '@angular/core';

@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective {
  @Input("appMyClass") options: any;

  constructor() { }

  // ngOnChanges() {
  //   console.log("ngOnChanges", this.options);
  // }

  ngDoCheck() {
  }
}
