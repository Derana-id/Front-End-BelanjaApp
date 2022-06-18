import axios from '../../utils/axios';
import { GET_MY_ADDRESS_PENDING, GET_MY_ADDRESS_SUCCESS, GET_MY_ADDRESS_FAILED } from '../types';

export const getMyAddress = () => async dispatch => {
  try {
    dispatch({
      type: GET_MY_ADDRESS_PENDING,
      payload: null
    });

    const res = await axios.get('myaddress');

    dispatch({
      type: GET_MY_ADDRESS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.message;
    }
    dispatch({
      type: GET_MY_ADDRESS_FAILED,
      payload: error.message
    });
  }
};
