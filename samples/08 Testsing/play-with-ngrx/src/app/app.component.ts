import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './appState';
import 'rxjs/add/operator/pluck';
import {Observable} from 'rxjs/Observable';
import {INCREMENT} from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    console.log("store", store);

    this.counter$ = store.select("counter");
  }

  inc() {
    this.store.dispatch({
      type: INCREMENT,
    })
  }
}
