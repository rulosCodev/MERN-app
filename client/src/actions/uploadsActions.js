import axios from 'axios';
import {ADD_FILE, CHANGE_FILE, GET_FILES} from '../types/uploadsTypes';







export const changeFile = (file) => (dispatch) => {
  dispatch({
    type: CHANGE_FILE,
    payload: file
  })
};

export const addFile = (newFile) =>  async (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  try {
    const response = await axios.post('http://localhost:4000/upload', newFile, config)
    console.log(response.data)
    dispatch({
      type: ADD_FILE,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
  
}

export const getFiles = () =>  async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/upload')
    console.log(response.data)
    dispatch({
      type: GET_FILES,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
  
}


