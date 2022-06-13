/* eslint-disable default-param-last */
import {
  GET_BRAND_FAILED,
  GET_BRAND_PENDING,
  GET_BRAND_SUCCESS,
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
};

const getAllBrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRAND_PENDING:
      return { ...state, isLoading: true };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_BRAND_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllBrandReducer;
