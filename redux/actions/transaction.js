import Cookies from 'js-cookie';
import axios from '../../utils/axios';
import { GET_MY_TRANSACTION_PENDING, GET_MY_TRANSACTION_SUCCESS, GET_MY_TRANSACTION_FAILED } from '../types';

export const getMyTransaction = router => async dispatch => {
  try {
    dispatch({
      type: GET_MY_TRANSACTION_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: 'cart/user'
    });

    dispatch({
      type: GET_MY_TRANSACTION_SUCCESS,
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
      type: GET_MY_TRANSACTION_FAILED,
      payload: error.message
    });
  }
};
