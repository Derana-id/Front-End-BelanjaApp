import axios from '../../utils/axios';
import { GET_MY_CART_PENDING, GET_MY_CART_SUCCESS, GET_MY_CART_FAILED } from '../types';

export const getMyCart = () => async dispatch => {
  try {
    dispatch({
      type: GET_MY_CART_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'get',
      url: 'cart/user'
    });

    dispatch({
      type: GET_MY_CART_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }
    dispatch({
      type: GET_MY_CART_FAILED,
      payload: error.message
    });
  }
};

export const deleteCart = id => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`cart/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// export const deleteCartUser = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .put('cart/delete/user')
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// };

export const addCart = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('cart', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updateCart = data => {
  return new Promise((resolve, reject) => {
    axios
      .put(`cart/${data.id}`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
