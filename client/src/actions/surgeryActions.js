import axios from 'axios';
import {GET_SURGERIES, ERROR_SURGERY, LOADING_SURGERY } from '../types/userTypes';



export const getSurgeries = () => async (dispatch) => {
  dispatch({
    type: LOADING_SURGERY
  })
  try {
    const response = await axios.get('https://neurotraking.now.sh/surgery')
    dispatch({
      type: GET_SURGERIES,
      payload: response
    })
  }
  catch(error){
    console.log(`Error : ${error.message}`);
    dispatch({
      type: ERROR_SURGERY,
      payload: error.message
    })
  }
 
};

// export const getSurgeries = () => dispatch => {
//   dispatch(setSurgeriesLoading());
//   axios
//     .get('https://neurotraking.now.sh/surgery')
//     .then(res => 
//       dispatch({
//         type: GET_SURGERIES,
//         payload: res.data.body
//       })
//     );
// }

// export const deleteSurgery = id => dispatch  => {
//   axios
//     .delete(`https://neurotraking.now.sh/surgery/${id}`)
//     .then( res => {
//       dispatch({
//         type: DELETE_SURGERY,
//         payload: id
//       })
//     })

  
// };



// export const setSurgeriesLoading = () => {
//   return {
//     type: SURGERIES_LOADING,
//   }
// };
