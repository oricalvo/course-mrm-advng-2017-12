import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() contact;
  fullName: string;

  constructor() {
    console.log("dialog");
  }

  ngOnChanges() {
    this.fullName = buildFullName(this.contact);
  }

  ngOnInit() {
  }

  ngDoCheck(){
    //console.log("DialogComponent.ngDoCheck");
  }

}

function buildFullName(contact: any) {
  return contact.name + ":" + contact.email;
}
