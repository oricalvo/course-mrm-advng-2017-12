import {AppState, Contact} from '../../app.state';

export function rootReducer(state: AppState, action): AppState {
  console.log("Action", action, state);

  if(action.type == "SET_CONTACTS") {
    return setContacts(state, action.contacts);
  }
  else if(action.type == "UPDATE_CONTACT") {
    return updateContact(state, action.contact);
  }

  return state;
}

function setContacts(state: AppState, contacts: Contact[]): AppState {
  return {
    ... state,
    contacts: contacts,
  }
}

function updateContact(state: AppState, contact: Contact) {
  const newContacts = state.contacts.concat([]);
  const index = newContacts.findIndex(c => c.id == contact.id);
  if(index == -1) {
    return state;
  }

  newContacts[index] = contact;

  return {
    ...state,
    contacts: newContacts,
  }
}
