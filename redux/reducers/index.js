import { combineReducers } from 'redux';
import detailUser from './detailUser';
import address from './address';
import listAddress from './listAddress';

export default combineReducers({
  detailUser,
  address,
  listAddress
});
