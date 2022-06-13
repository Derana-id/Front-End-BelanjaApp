/* eslint-disable default-param-last */
import { GET_ALL_CATEGORY_FAILED, GET_ALL_CATEGORY_PENDING, GET_ALL_CATEGORY_SUCCESS } from '../types';

const initalState = {
  isLoading: true,
  isError: false,
  data: []
};

const getAllCategory = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_PENDING:
      return { ...state, isLoading: true };
    case GET_ALL_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    case GET_ALL_CATEGORY_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getAllCategory;
