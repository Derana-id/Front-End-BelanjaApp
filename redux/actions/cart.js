import Cookies from 'js-cookie';
import axios from '../../utils/axios';
import { GET_MY_CART_PENDING, GET_MY_CART_SUCCESS, GET_MY_CART_FAILED } from '../types';

export const getMyCart = router => async dispatch => {
  try {
    dispatch({
      type: GET_MY_CART_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: 'cart/user'
    });

    dispatch({
      type: GET_MY_CART_SUCCESS,
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
      type: GET_MY_CART_FAILED,
      payload: error.message
    });
  }
};

export const deleteCart = id => {
  return new Promise((resolve, reject) => {
    axios
      .put(`cart/delete/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deleteCartUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .put('cart/delete/user')
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
