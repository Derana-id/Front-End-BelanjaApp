import axios from 'axios';
import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_PENDING,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_DETAIL_PRODUCT_FAILED,
  GET_DETAIL_PRODUCT_PENDING,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_POPULAR_PRODUCTS_FAILED,
  GET_POPULAR_PRODUCTS_PENDING,
  GET_POPULAR_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FILTER_FAILED,
  GET_PRODUCTS_FILTER_PENDING,
  GET_PRODUCTS_FILTER_SUCCESS
} from '../types';

export const getProducts = () => async dispatch => {
  try {
    dispatch({
      type: GET_ALL_PRODUCTS_PENDING
    });
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}product`, {});
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILED,
      payload: error.message
    });
  }
};

export const getPopularProducts = search => async dispatch => {
  const getValueSearch = search || '';
  try {
    dispatch({
      type: GET_POPULAR_PRODUCTS_PENDING
    });
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}product?search=${getValueSearch}&sortType=DESC`, {});
    dispatch({
      type: GET_POPULAR_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_POPULAR_PRODUCTS_FAILED,
      payload: error.message
    });
  }
};

export const getDetailProduct = id => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_PRODUCT_PENDING
    });
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}product/${id}`, {});
    dispatch({
      type: GET_DETAIL_PRODUCT_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_PRODUCT_FAILED
    });
  }
};

export const getFilter = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('product/filter', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
