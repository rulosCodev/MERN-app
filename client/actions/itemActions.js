import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});
