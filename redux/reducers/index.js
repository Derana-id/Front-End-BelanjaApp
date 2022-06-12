import { combineReducers } from 'redux';
import detailUser from './detailUser';
import getAllProducts from './getAllProducts';

export default combineReducers({
  detailUser,
  products: getAllProducts
});
