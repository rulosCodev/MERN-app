import axios from 'axios';
import { ADD_SURGERY } from './types';



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



// export const setItemsLoading = () => {
//   return {
//     type: ITEM_LOADING,
//   }
// };
