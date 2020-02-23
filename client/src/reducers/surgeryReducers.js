import {UPDATE_SURGERY,CHANGE_FILE,GET_SURGERIES, GET_SURGERY, LOADING_SURGERY, ERROR_SURGERY, DELETE_SURGERY, ADD_SURGERY} from '../types/surgeryTypes';
const INITIAL_STATE = {
  files:[],
  surgeries: [],
  surgery:'',
  loading: false,
  error: ''
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type) {
   
    case ADD_SURGERY:
    return {
      ...state,
      surgeries: [action.payload,...state.surgeries]
    };
    case UPDATE_SURGERY:
    return {
      ...state,
      surgery: {
        ...state.surgery,
        preimages: action.payload
      }
    };
    case GET_SURGERIES:
      return {
        ...state,
        surgeries: action.payload,
        loading: false
      };
    case GET_SURGERY:
      return {
        ...state,
        surgery: action.payload[0],
        loading: false
      };
    case DELETE_SURGERY:
      return {
        ...state,
        surgeries: state.surgeries.filter(surgeries => surgeries._id !== action.payload)
      };
    case CHANGE_FILE:
      return {
        ...state,
        files:[action.payload, ...state.files]
      }
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


