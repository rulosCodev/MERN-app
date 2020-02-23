import axios from 'axios';
import {ADD_FILE, UPLOAD_TARGET, CHANGE_FILE, GET_FILES, GET_TARGET} from '../types/uploadsTypes';







export const changeFile = (file) => (dispatch) => {
  dispatch({
    type: CHANGE_FILE,
    payload: file
  })
};

export const addFile = (newFile) =>  async (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  try {
    const id = newFile.get('targetid');
    const response = await axios.post('http://localhost:5000/uploads', newFile, config)
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
    const response = await axios.get('http://localhost:5000/uploads')
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
    const response = await axios.post('http://localhost:5000/target', newTarget);
    console.log(response.data.body.imageid.length)
  } catch (error) {
    console.log(error.message)
  }
}

export const getTarget = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/target?surgeyid=${id}`)
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

export const uploadTarget = (id, newUrl) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:5000/target/${id}`, {
      image: newUrl
    } )
    console.log(response.data)
    
    return response.data.body
  } catch (error) {
    console.log(error.message)
  }
}

