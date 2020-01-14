import {GET_SURGERIES, LOADING_SURGERY, ERROR_SURGERY} from '../types/userTypes';
const INITIAL_STATE = {
  surgeries: {
    data: {
      error: "",
      body: []
    }
  },
  loanding: false,
  error: ''
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type) {
   
    // case ADD_SURGERY:
    // return {
    //   ...state,
    //   surgeries: [action.payload,...state.surgeries]
    // };
    case GET_SURGERIES:
      return {
        ...state,
        surgeries: action.payload,
        loading: false
      };
    // case DELETE_SURGERY:
    // return {
    //   ...state,
    //   surgeries: state.surgeries.filter(surgeries => surgeries._id !== action.payload)
    // };
   
    case LOADING_SURGERY:
      return {
        ...state,
        loading: true
      };
    case ERROR_SURGERY:
    return {
      ...state,
      error: action.payload
    };
    default:
      return state;
  }
}


