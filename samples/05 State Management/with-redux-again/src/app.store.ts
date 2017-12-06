import {AnyAction, createStore, Dispatch, Store, Unsubscribe, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {AppState} from './app.state';
import {rootReducer} from './app/reducers/root.reducer';

const initialState: AppState = {
  contacts: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export abstract class AppStore implements Store<AppState> {
  dispatch: Dispatch<AppState>;

  abstract getState(): AppState;
  abstract subscribe(listener: () => void): Unsubscribe;
  abstract replaceReducer(nextReducer: (state: AppState, action: AnyAction) => AppState): void;
}

export const STORE_PROVIDER = {provide: AppStore, useValue: store};
