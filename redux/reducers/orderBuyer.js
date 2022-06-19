import {
  GET_MY_ORDER_PENDING,
  GET_MY_ORDER_SUCCESS,
  GET_MY_ORDER_FAILED
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  error: null,
};

const listMyTransactionBuyer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_ORDER_PENDING:
      return { ...state, isLoading: true };
    case GET_MY_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_MY_ORDER_FAILED:
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

export default listMyTransactionBuyer;
