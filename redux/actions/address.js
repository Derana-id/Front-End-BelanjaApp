import axios from '../../utils/axios';
import Cookies from 'js-cookie';

import {
  GET_USER_ADDRESS_PENDING,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_FAILED,
  GET_USER_ADDRESS_DETAIL_PENDING,
  GET_USER_ADDRESS_DETAIL_SUCCESS,
  GET_USER_ADDRESS_DETAIL_FAILED
} from '../types';

export const getListOfMyAddress = (Router) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_ADDRESS_PENDING,
      payload: null,
    });

    const res = await axios.get(`myaddress`);
    console.log(res.data)

    dispatch({
      type: GET_USER_ADDRESS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_USER_ADDRESS_FAILED,
      payload: error.message,
    });
  }
};

export const getListofAddress = (userID) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_ADDRESS_DETAIL_FAILED,
      payload: null,
    });

    const res = await axios.get(
      `address/detail/${userID}`
    );

    dispatch({
      type: GET_USER_ADDRESS_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        Cookies.remove('token');
        Router.push('/auth/login');
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_USER_ADDRESS_DETAIL_PENDING,
      payload: error.message,
    });
  }
};

export const getDetailAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_ADDRESS_DETAIL_FAILED,
      payload: null,
    });

    const res = await axios.get(
      `address/detail/${id}`,
    );

    dispatch({
      type: GET_USER_ADDRESS_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        Cookies.remove('token');
        Router.push('/auth/login');
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_USER_ADDRESS_DETAIL_PENDING,
      payload: error.message,
    });
  }
};

export const addAddress = async (body, setErrors) => {
  try {
    await axios.post(`address`, body);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const changeAddress = async (id, body, setErrors) => {
  try {
    await axios.put(`address/${id}`, body);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};
