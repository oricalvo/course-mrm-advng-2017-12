import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact;

  constructor() {
  }

  ngOnInit() {
    console.log("ContactItemComponent.ngOnInit", this.contact);
  }

  ngOnDestroy() {
    console.log("ContactItemComponent.ngOnDestroy", this.contact);
  }

  setState(data) {
    this.contact = data;
  }

}
