import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactIndexComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit() {
  }

}

export interface Contact {
  id: number;
  name: string;
}
