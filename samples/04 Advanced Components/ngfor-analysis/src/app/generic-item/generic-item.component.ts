import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';

export type ConvertItemToComponentType = (item: any) => Type<any>;

@Component({
  selector: 'app-generic-item',
  templateUrl: './generic-item.component.html',
  styleUrls: ['./generic-item.component.css']
})
export class GenericItemComponent implements OnInit {
  @Input() item: any;
  @Input() convertItemToComponentType: ConvertItemToComponentType;
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log("marker", this.marker);
  }

  ngOnChanges() {
    
    const componentType = this.convertItemToComponentType(this.item);
    const componentFactory = this.cfr.resolveComponentFactory(componentType);
    const componentRef = this.marker.createComponent(componentFactory);
    componentRef.instance.setState(this.item);
  }

}
