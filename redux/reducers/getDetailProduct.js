/* eslint-disable default-param-last */
import { GET_DETAIL_PRODUCT_FAILED, GET_DETAIL_PRODUCT_PENDING, GET_DETAIL_PRODUCT_SUCCESS } from '../types';

const initalState = {
  isLoading: false,
  isError: false,
  data: []
};

const getDetailProduct = (state = initalState, action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_PENDING:
      return { ...state, isLoading: true };
    case GET_DETAIL_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    case GET_DETAIL_PRODUCT_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getDetailProduct;
