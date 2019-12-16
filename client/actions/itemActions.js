import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING} from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('http://localhost:4000/item')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data.body
      })
    );
}

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});

export const setItemsLoading = () => {
  return {
    type: ITEM_LOADING,
  }
};
