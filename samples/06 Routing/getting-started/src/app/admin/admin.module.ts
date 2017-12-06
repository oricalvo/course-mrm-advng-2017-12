import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
  declarations: [AdminComponent],
})
export class AdminModule { }
