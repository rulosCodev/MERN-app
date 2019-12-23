import { ADD_SURGERY, GET_SURGERIES, SURGERIES_LOADING } from '../actions/types';

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
    case GET_SURGERIES:
      return {
        ...state,
        surgeries: action.payload,
        loading: false
      };
   
    case SURGERIES_LOADING:
      return {
        ...state,
        loading: true
      };
      default:
        return state;
  }
}