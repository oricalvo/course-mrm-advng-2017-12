import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {BEGIN_INCREMENT, INCREMENT} from './counter.reducer';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect() inc$: Observable<Action> = this.actions$.ofType(BEGIN_INCREMENT)
    .mergeMap((action: any) =>
      this.http.post('/auth', action.payload)
      // If successful, dispatch success action with result
        .map(data => ({ type: INCREMENT, payload: data }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: 'INCREMENT_FAILED' }))
    );

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {}
}
