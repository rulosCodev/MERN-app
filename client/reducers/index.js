import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import surgeryReducer from './surgeryRecuder';

export default combineReducers({
  item: itemReducer,
  surgery: surgeryReducer
})