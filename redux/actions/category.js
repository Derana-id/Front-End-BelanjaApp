import axios from 'axios';
import { GET_ALL_CATEGORY_PENDING, GET_ALL_CATEGORY_SUCCESS, GET_ALL_CATEGORY_FAILED } from '../types';

export const getCategory = () => async dispatch => {
  try {
    dispatch({
      type: GET_ALL_CATEGORY_PENDING
    });
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}category`, {});
    dispatch({
      type: GET_ALL_CATEGORY_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAILED,
      payload: error.message
    });
  }
};
