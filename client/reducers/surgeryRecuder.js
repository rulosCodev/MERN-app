import { ADD_SURGERY } from '../actions/types';

const initialState = {
  surgeries: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
   
    case ADD_SURGERY:
    return {
      ...state,
      surgeries: [action.payload,...state.surgeries]
    };
   
  //   case ITEMS_LOADING:
  //     return {
  //       ...state,
  //       loading: true
  //     };
      default:
        return state;
  }
}