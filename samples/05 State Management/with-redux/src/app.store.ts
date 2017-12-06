import {createStore} from 'redux';

interface AppState {
  contacts: Contact[];
}

interface Contact {
  id: number;
  name: string;
}

const initialState: AppState = {
  contacts: null,
};

function loadContacts(state: AppState): AppState {
  return {
    contacts: [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ]
  };
}

function reducer(state: AppState, action): AppState {
  console.log("reducer", action);

  if(action.type == "LOAD_CONTACTS") {
    return loadContacts(state);
  }

  return state;
}

export const appStore = createStore(reducer, initialState);
