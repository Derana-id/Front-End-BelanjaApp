/* eslint-disable default-param-last */
import { GET_POPULAR_PRODUCTS_FAILED, GET_POPULAR_PRODUCTS_PENDING, GET_POPULAR_PRODUCTS_SUCCESS } from '../types';

const initalState = {
  isLoading: false,
  isError: false,
  data: []
};

const getPopular = (state = initalState, action) => {
  switch (action.type) {
    case GET_POPULAR_PRODUCTS_PENDING:
      return { ...state, isLoading: true };
    case GET_POPULAR_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    case GET_POPULAR_PRODUCTS_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getPopular;
