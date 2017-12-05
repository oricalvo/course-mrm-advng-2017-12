import { Component } from '@angular/core';
import {ModalService} from './modal.service';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: ModalService) {
  }

  showModal() {
    const about = this.modalService.show(AboutComponent);
  }
}
