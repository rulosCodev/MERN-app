import axios from 'axios';
import {UPDATE_SURGERY,CHANGE_FILE,GET_SURGERIES,GET_SURGERY, ERROR_SURGERY, LOADING_SURGERY, ADD_SURGERY, DELETE_SURGERY} from '../types/surgeryTypes';



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
  
  dispatch({
    type: ADD_SURGERY,
    payload: response.data.body
  })
};

export const changeFile = (file) => (dispatch) => {
  dispatch({
    type: CHANGE_FILE,
    payload: file
  })
}
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
  axios.delete(`https://neurotraking-api.now.sh/surgery/${id}`)
  dispatch({
    type: DELETE_SURGERY,
    payload: id
  })

  
};

export const updateSurgery = (id, newUrl) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:5000/surgery/pre/${id}`, {
      image: newUrl
    } )
    const newSurgeryPre = response.data.body.preimages
    dispatch({
      type: UPDATE_SURGERY,
      payload: newSurgeryPre
    })
    return response.data.body
  } catch (error) {
    console.log(error.message)
  }
}



// export const setSurgeriesLoading = () => {
//   return {
//     type: SURGERIES_LOADING,
//   }
// };
