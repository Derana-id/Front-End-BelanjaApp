import axios from 'axios';
import { GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_PENDING, GET_ALL_PRODUCTS_SUCCESS } from '../types';

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
