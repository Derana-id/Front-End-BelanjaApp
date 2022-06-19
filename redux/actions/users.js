import axios from '../../utils/axios';
import {
  GET_PROFILE_ID_FAILED,
  GET_PROFILE_ID_SUCCESS,
  GET_PROFILE_ID_PENDING,
  GET_STORE_ID_FAILED,
  GET_STORE_ID_SUCCESS,
  GET_STORE_ID_PENDING,
  GET_USER_CHAT_PENDING,
  GET_USER_CHAT_FAILED,
  GET_USER_CHAT_SUCCESS
} from '../types';

export const getDetailProfile = id => async dispatch => {
  try {
    dispatch({
      type: GET_PROFILE_ID_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: `user/${id}`
    });

    dispatch({
      type: GET_PROFILE_ID_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_ID_FAILED,
      payload: error.message
    });
  }
};

export const getDetailStore = id => async dispatch => {
  try {
    dispatch({
      type: GET_STORE_ID_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: `store/${id}`
    });

    dispatch({
      type: GET_STORE_ID_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_STORE_ID_FAILED,
      payload: error.message
    });
  }
};

export const getListUserChat = () => async dispatch => {
  try {
    dispatch({
      type: GET_USER_CHAT_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: 'chat'
    });

    dispatch({
      type: GET_USER_CHAT_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_USER_CHAT_FAILED,
      payload: error.message
    });
  }
};
