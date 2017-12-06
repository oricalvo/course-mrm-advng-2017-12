import {Route} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';
import {ContactComponent} from './app/contact/contact.component';

export const routes: Route[] = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact/:id",
    component: ContactComponent,
  },
  {
    path: "admin",
    loadChildren: "app/admin/admin.module#AdminModule"
    //component: ContactComponent,
  },
];
