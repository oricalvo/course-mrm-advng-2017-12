import {Component, OnInit, Optional} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() private modalService: ModalService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.close();
  }
}
