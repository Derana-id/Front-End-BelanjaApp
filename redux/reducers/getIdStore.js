import { GET_STORE_ID_FAILED, GET_STORE_ID_SUCCESS, GET_STORE_ID_PENDING } from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
  pagination: []
};

// eslint-disable-next-line default-param-last
const detailStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_ID_PENDING:
      return { ...state, isLoading: true };
    case GET_STORE_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_STORE_ID_FAILED:
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

export default detailStore;
