import {Injectable, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalComponent} from './modal/modal.component';

@Injectable()
export class ModalService {
  component: ModalComponent;

  constructor() { }

  show<T>(componentType: Type<T>) {
    return this.component.show(componentType);
  }

  _onCreated(component: ModalComponent) {
    this.component = component;
  }

  close() {
    this.component.close();
  }
}
