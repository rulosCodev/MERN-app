import { combineReducers } from 'redux';
import surgeryReducers from './surgeryReducers';
import uploadsReducers from './uploadsReducers';
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
  surgeryReducers,
  uploadsReducers,
  formReducer
});

