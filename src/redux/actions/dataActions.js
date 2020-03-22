import { 
  SET_SCREAMS,
  LOADING_DATA, 
  LIKE_SCREAM, 
  UNLIKE_SCREAM,
  DELETE_SCREAM, 
  SET_ERRORS,
  CLEAR_ERRORS,
  POST_SCREAM,
  LOADING_UI
} from '../types';
import axios from 'axios';

// Get all screams
export const getScreams = (screamId) => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get('/screams')
    .then(res => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data
      })
    })
    .catch(error => {
      dispatch({
        type: SET_SCREAMS,
        payload: []
      })
    })
}

// Post a scream
export const postScream = newScream => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.post('/scream', newScream)
    .then(res => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(error => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      })
    })
}

// Like a scream
export const likeScream = (screamId) => dispatch => {
  axios.get(`/screams/${screamId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_SCREAM,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
}

// Unlike a scream
export const unlikeScream = (screamId) => dispatch => {
  axios.get(`/screams/${screamId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_SCREAM,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
}

// Delete a scream
export const deleteScream = screamId => dispatch => {
  axios.delete(`/screams/${screamId}`)
    .then( ()=> {
      dispatch({ 
        type: DELETE_SCREAM,  
        payload: screamId
      })
    })
    .catch(error => console.log(error));
}
