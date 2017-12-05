import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contact;

  @ViewChild("dialog1") dialog1;

  constructor() {
    console.log("ctor", this.dialog1);

    this.contact = {
      name: "Ori",
      email: "gmail",
      //fullName: buildFullName(this)
    }
  }

  ngOnInit(){
    console.log("ngOnInit", this.dialog1);
  }

  ngDoCheck(){
    console.log("AppComponent.ngDoCheck");
  }

  run() {
  }

  change() {
    //this.contact.name = "XXX";

    this.contact = {
      ... this.contact,
      name: "XXX",
    }
  }
}
