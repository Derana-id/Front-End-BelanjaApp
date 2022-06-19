import { GET_USER_CHAT_FAILED, GET_USER_CHAT_PENDING, GET_USER_CHAT_SUCCESS } from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null
};

const listUserChat = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CHAT_PENDING:
      return { ...state, isLoading: true };
    case GET_USER_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_USER_CHAT_FAILED:
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

export default listUserChat;
