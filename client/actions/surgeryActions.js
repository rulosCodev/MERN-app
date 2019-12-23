import axios from 'axios';
import { ADD_SURGERY, GET_SURGERIES, SURGERIES_LOADING } from './types';



export const addSurgery = surgery => dispatch => {
  axios
    .post('http://localhost:4000/surgery', surgery)
    .then(res =>
       dispatch({
        type: ADD_SURGERY,
        payload: res.data.body
       })
       )
 
};

export const getSurgeries = () => dispatch => {
  dispatch(setSurgeriesLoading());
  axios
    .get('http://localhost:4000/surgery')
    .then(res => 
      dispatch({
        type: GET_SURGERIES,
        payload: res.data.body
      })
    );
}



export const setSurgeriesLoading = () => {
  return {
    type: SURGERIES_LOADING,
  }
};
