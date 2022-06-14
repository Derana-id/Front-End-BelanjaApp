/* eslint-disable default-param-last */
import { GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_PENDING, GET_ALL_PRODUCTS_SUCCESS } from '../types';

const initalState = {
  isLoading: false,
  isError: false,
  data: []
};

const getAllProducts = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_PENDING:
      return { ...state, isLoading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    case GET_ALL_PRODUCTS_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getAllProducts;
