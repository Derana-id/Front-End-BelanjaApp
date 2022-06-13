import { GET_MY_TRANSACTION_PENDING, GET_MY_TRANSACTION_SUCCESS, GET_MY_TRANSACTION_FAILED } from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
  pagination: []
};

const detailCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_TRANSACTION_PENDING:
      return { ...state, isLoading: true };
    case GET_MY_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_MY_TRANSACTION_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default detailCartReducer;
