import axios from 'axios';
import {GET_SURGERIES,GET_SURGERY, ERROR_SURGERY, LOADING_SURGERY, ADD_SURGERY, DELETE_SURGERY} from '../types/surgeryTypes';



export const getSurgeries = () => async (dispatch) => {
  dispatch({
    type: LOADING_SURGERY
  })
  try {
    const response = await axios.get('http://localhost:5000/surgery')
    dispatch({
      type: GET_SURGERIES,
      payload: response.data.body
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
export const getSurgery = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_SURGERY
  })
  try {
    const response = await axios.get(`http://localhost:5000/surgery/${id}`)
    dispatch({
      type: GET_SURGERY,
      payload: response.data.body
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

export const addSurgery = (surgery) => async(dispatch) => {
  const response = await axios.post('http://localhost:5000/surgery', surgery)
  const newtarget = response.data.body
  console.log(newtarget)
  const response2 = await axios.post('http://localhost:5000/target', {
    surgeryid: newtarget._id,
    imageid: []
  })
  dispatch({
    type: ADD_SURGERY,
    payload: response.data.body
  })
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

export const deleteSurgery = (id) => (dispatch)  => {
  axios.delete(`http://localhost:5000/surgery/${id}`)
  dispatch({
    type: DELETE_SURGERY,
    payload: id
  })

  
};



// export const setSurgeriesLoading = () => {
//   return {
//     type: SURGERIES_LOADING,
//   }
// };
