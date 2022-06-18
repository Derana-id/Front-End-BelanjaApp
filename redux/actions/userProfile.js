/* eslint-disable consistent-return */
import axios from '../../utils/axios';
import {
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
  GET_MY_ORDER_PENDING,
  GET_MY_ORDER_SUCCESS,
  GET_MY_ORDER_FAILED
} from '../types';

export const getDetailUser = (id, token) => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null
    });

<<<<<<< HEAD
    const res = await axios.get(`profile/${id}`, {
=======
    const res = await axios.get(`user/${id}`, {
>>>>>>> 85c2722007beddaec4c3c18fb692d209b8093498
      headers: { token }
    });

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message
    });
  }
};

export const updateProfile = (data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put('profile', data, {
        headers: {
          token,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// address Profile

export const getAddressUser = (id, token) => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null
    });

    const res = await axios.get(`address/detail/${id}`, {
      headers: { token }
    });

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message
    });
  }
};

export const getMyOrder = () => async dispatch => {
  try {
    dispatch({
      type: GET_MY_ORDER_PENDING,
      payload: null
    });

    const res = await axios.get('mytransaction');

    dispatch({
      type: GET_MY_ORDER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ORDER_FAILED,
      payload: error.message
    });
  }
};

export const createAddressBuyer = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('address', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updateAddressBuyer = (id, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`address/${id}`, data, {
        headers: {
          token,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deleteAddressBuyer = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`address/delete/${id}`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
