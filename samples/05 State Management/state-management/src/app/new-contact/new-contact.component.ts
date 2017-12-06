import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  name: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  add() {
    this.contactService.add(this.name);
  }

}
