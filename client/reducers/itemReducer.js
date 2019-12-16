import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    {id:uuid(), name:'cosa1'},
    {id:uuid(), name:'cosa2'},
    {id:uuid(), name:'cosa3'},
    {id:uuid(), name:'cosa4'},
    {id:uuid(), name:'cosa5'},

 
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case ADD_ITEM:
    return {
      ...state,
      items: [action.payload,...state.items]
    };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };
      default:
        return state;
  }
}