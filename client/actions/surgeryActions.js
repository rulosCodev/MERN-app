import axios from 'axios';
import { ADD_SURGERY, GET_SURGERIES, SURGERIES_LOADING, DELETE_SURGERY } from './types';



export const addSurgery = surgery => dispatch => {
  axios
    .post('https://neurotraking.now.sh/surgery', surgery)
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
    .get('https://neurotraking.now.sh/surgery')
    .then(res => 
      dispatch({
        type: GET_SURGERIES,
        payload: res.data.body
      })
    );
}

export const deleteSurgery = id => dispatch  => {
  axios
    .delete(`https://neurotraking.now.sh/surgery/${id}`)
    .then( res => {
      dispatch({
        type: DELETE_SURGERY,
        payload: id
      })
    })

  
};



export const setSurgeriesLoading = () => {
  return {
    type: SURGERIES_LOADING,
  }
};
