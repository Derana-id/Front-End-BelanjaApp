/* eslint-disable consistent-return */
import axios from '../../utils/axios';
import {
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
  GET_MY_ORDER_PENDING,
  GET_MY_ORDER_SUCCESS,
  GET_MY_ORDER_FAILED,
  GET_MY_ADDRESS_PENDING,
  GET_MY_ADDRESS_SUCCESS,
  GET_MY_ADDRESS_FAILED
} from '../types';

export const getDetailUser = (id, token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });

    const res = await axios.get(
      `profile/${id}`,
      {
        headers: { token },
      }
    );

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
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

export const getAddressUser = (id, token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });

    const res = await axios.get(
      `address/detail/${id}`,
      {
        headers: { token },
      }
    );

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message
    });
  }
};

export const getMyOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_ORDER_PENDING,
      payload: null,
    });

    const res = await axios.get(
      'mytransaction'
    );

    dispatch({
      type: GET_MY_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ORDER_FAILED,
      payload: error.message
    });
  }
};

export const createAddressBuyer = (data) => {
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

export const getAddress = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_ADDRESS_PENDING,
      payload: null,
    });

    const res = await axios.get(
      'myaddress'
    );

    dispatch({
      type: GET_MY_ADDRESS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ADDRESS_FAILED,
      payload: error.message
    });
  }
};