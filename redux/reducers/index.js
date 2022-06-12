import { combineReducers } from 'redux';
import detailUser from './detailUser';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';

export default combineReducers({
  detailUser,
  products: getAllProducts,
  getPopular
});
