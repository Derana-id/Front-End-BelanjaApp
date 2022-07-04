import { GET_TRANSACTION_STORE_FAILED, GET_TRANSACTION_STORE_PENDING, GET_TRANSACTION_STORE_SUCCESS } from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null
};

const listTransactionStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_STORE_PENDING:
      return { ...state, isLoading: true };
    case GET_TRANSACTION_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_TRANSACTION_STORE_FAILED:
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

export default listTransactionStoreReducer;
