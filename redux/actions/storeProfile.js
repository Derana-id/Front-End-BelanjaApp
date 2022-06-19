/* eslint-disable consistent-return */
import axios from '../../utils/axios';
import {
  GET_DETAIL_STORE_PENDING,
  GET_DETAIL_STORE_SUCCESS,
  GET_DETAIL_STORE_FAILED,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_BRAND_PENDING,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_DETAIL_MY_PRODUCT_PENDING,
  GET_DETAIL_MY_PRODUCT_SUCCESS,
  GET_DETAIL_MY_PRODUCT_FAILED,
  GET_TRANSACTION_STORE_PENDING,
  GET_TRANSACTION_STORE_SUCCESS,
  GET_TRANSACTION_STORE_FAILED
} from '../types';

export const getDetailStore = id => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_STORE_PENDING,
      payload: null
    });

    const res = await axios.get(`user/${id}`);

    dispatch({
      type: GET_DETAIL_STORE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_STORE_FAILED,
      payload: error.message
    });
  }
};

export const listOrderTransaction = () => async dispatch => {
  try {
    dispatch({
      type: GET_TRANSACTION_STORE_PENDING,
      payload: null
    });

    const res = await axios.get('transaction/status');

    dispatch({
      type: GET_TRANSACTION_STORE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTION_STORE_FAILED,
      payload: error.message
    });
  }
};

export const updateStore = data => {
  return new Promise((resolve, reject) => {
    axios
      .put('user/store', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const createProductStore = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('product', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getDetailMyProduct = () => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_MY_PRODUCT_PENDING,
      payload: null
    });

    const res = await axios.get('product/user');

    dispatch({
      type: GET_DETAIL_MY_PRODUCT_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_MY_PRODUCT_FAILED,
      payload: error.message
    });
  }
};

export const getAllCategory = () => async dispatch => {
  try {
    dispatch({
      type: GET_CATEGORY_PENDING,
      payload: null
    });

    const res = await axios.get('category');

    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_FAILED,
      payload: error.message
    });
  }
};

export const getAllBrand = () => async dispatch => {
  try {
    dispatch({
      type: GET_BRAND_PENDING,
      payload: null
    });

    const res = await axios.get('/brand');

    dispatch({
      type: GET_BRAND_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_BRAND_FAILED,
      payload: error.message
    });
  }
};
