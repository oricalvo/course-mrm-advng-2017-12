import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  find() {
    this.contactService.find(this.searchStr);
  }

}
