import {Component, ComponentFactoryResolver, ComponentRef, HostBinding, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;
  compRef: ComponentRef<any>;

  @HostBinding("class.visible")
  private visible: boolean = false;

  constructor(modalService: ModalService, private cfr: ComponentFactoryResolver) {
    modalService._onCreated(this);
  }

  ngOnInit() {
    console.log("marker", this.marker);
  }

  show<T>(componentType: Type<T>): T {
    if(this.compRef) {
      this.compRef.destroy();
      this.compRef = null;
    }

    const factory = this.cfr.resolveComponentFactory(componentType);
    this.compRef = this.marker.createComponent(factory);

    this.visible = true;

    return this.compRef.instance;
  }

  close() {
    this.visible = false;
  }
}
