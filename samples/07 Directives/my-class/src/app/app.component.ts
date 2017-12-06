import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //id: number = 0;
  options = {id: 0};
  @ViewChild("myTemplate") myTemplate: TemplateRef<any>;
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;

  ngOnInit() {
    console.log("myTemplate", this.myTemplate, this.marker);
  }

  inject() {
    this.marker.createEmbeddedView(this.myTemplate);
  }

  yoyo() {
    console.log("yoyo");
  }
}
