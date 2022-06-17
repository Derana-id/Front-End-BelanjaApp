import Cookies from 'js-cookie';
import axios from '../../utils/axios';
import { GET_DETAIL_RECEIVER_PENDING, GET_DETAIL_RECEIVER_SUCCESS, GET_DETAIL_RECEIVER_FAILED } from '../types';

export const chat = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('chat', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getDetailReceiver = (router, id) => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_RECEIVER_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: `store/${id}`
    });

    dispatch({
      type: GET_DETAIL_RECEIVER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        Cookies.remove('token');
        router.push('/auth/login');
      }

      error.message = error.response.data.error;
    }
    dispatch({
      type: GET_DETAIL_RECEIVER_FAILED,
      payload: error.message
    });
  }
};
