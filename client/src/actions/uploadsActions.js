import axios from 'axios';
import {ADD_FILE, CHANGE_FILE, GET_FILES, GET_TARGET} from '../types/uploadsTypes';







export const changeFile = (file) => (dispatch) => {
  dispatch({
    type: CHANGE_FILE,
    payload: file
  })
};

export const addFile = (newFile) =>  async (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  try {
    const response = await axios.post('http://localhost:4000/uploads', newFile, config)
    console.log(response.data)
    dispatch({
      type: ADD_FILE,
      payload: response.data.body
    })
    return response.data.body
  } catch (error) {
    console.log(error);
  }
  
}

export const getFiles = () =>  async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/uploads')
    console.log(response.data)
    dispatch({
      type: GET_FILES,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
  
}

export const addTargetUploads = (newTarget) => async (dispatch) => {
  try {
    console.log(newTarget)
    const response = await axios.post('http://localhost:4000/target', newTarget);
    console.log(response.data.body.imageid.length)
  } catch (error) {
    console.log(error.message)
  }
}

export const getTarget = (id) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/target?surgeyid=${id}')
    console.log(response.data)
    dispatch({
      type: GET_TARGET,
      payload: response.data.body
    })
    return response.data.body
  } catch (error) {
    console.log(error.message)
  }
}

