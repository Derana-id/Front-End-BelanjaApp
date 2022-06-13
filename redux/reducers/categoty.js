/* eslint-disable default-param-last */
import {
  GET_CATEGORY_FAILED,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
};

const getAllCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PENDING:
      return { ...state, isLoading: true };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_CATEGORY_FAILED:
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

export default getAllCategoryReducer;
