import {
  GET_USER_ADDRESS_DETAIL_PENDING,
  GET_USER_ADDRESS_DETAIL_SUCCESS,
  GET_USER_ADDRESS_DETAIL_FAILED
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  error: null,
};

const AddressDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ADDRESS_DETAIL_PENDING:
      return { ...state, isLoading: true };
    case GET_USER_ADDRESS_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_USER_ADDRESS_DETAIL_FAILED:
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

export default AddressDetailReducer;
