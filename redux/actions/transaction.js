import axios from '../../utils/axios';
import { GET_MY_TRANSACTION_PENDING, GET_MY_TRANSACTION_SUCCESS, GET_MY_TRANSACTION_FAILED } from '../types';

export const getMyTransaction = () => async dispatch => {
  try {
    dispatch({
      type: GET_MY_TRANSACTION_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'GET',
      url: 'transaction?isPayment=0&status=0'
    });

    dispatch({
      type: GET_MY_TRANSACTION_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }
    dispatch({
      type: GET_MY_TRANSACTION_FAILED,
      payload: error.message
    });
  }
};

export const createTransaction = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('transaction', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updatePayment = (data, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`transaction/payment/${id}`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
