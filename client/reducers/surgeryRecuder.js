import { ADD_SURGERY, GET_SURGERIES, SURGERIES_LOADING, DELETE_SURGERY} from '../actions/types';

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
    case DELETE_SURGERY:
    return {
      ...state,
      surgeries: state.surgeries.filter(surgeries => surgeries._id !== action.payload)
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