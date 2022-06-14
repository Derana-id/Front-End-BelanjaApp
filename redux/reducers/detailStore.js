/* eslint-disable default-param-last */
import {
  GET_DETAIL_STORE_FAILED,
  GET_DETAIL_STORE_PENDING,
  GET_DETAIL_STORE_SUCCESS,
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
};

const detailStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_STORE_PENDING:
      return { ...state, isLoading: true };
    case GET_DETAIL_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_DETAIL_STORE_FAILED:
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

export default detailStoreReducer;
