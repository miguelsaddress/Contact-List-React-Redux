import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts'
import ActiveContactReducer from './reducer_active_contact'

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer
});

export default rootReducer;
