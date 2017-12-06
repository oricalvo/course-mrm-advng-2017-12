import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(route: ActivatedRoute, router: Router) {
    console.log("id", route.snapshot.params.id);
  }

  ngOnInit() {
  }

}
