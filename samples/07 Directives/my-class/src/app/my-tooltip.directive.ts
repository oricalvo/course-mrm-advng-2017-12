import {Directive, Optional} from '@angular/core';
import {ClockComponent} from './clock/clock.component';

export abstract class ComponentWithTooltip {
}

@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltipDirective {

  constructor(@Optional() hostComponent: ComponentWithTooltip) {
    console.log("hostComponent", hostComponent);
  }

}
