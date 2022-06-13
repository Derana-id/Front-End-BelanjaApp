import { combineReducers } from 'redux';
import detailUser from './detailUser';
import myCart from './myCart';
import myTransaction from './mytransaction';

export default combineReducers({
  detailUser,
  myCart,
  myTransaction
});
