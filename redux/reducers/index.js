import { combineReducers } from 'redux';
import detailUser from './detailUser';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';
import getDetailProduct from './getDetailProduct';

export default combineReducers({
  detailUser,
  getAllProducts,
  getPopular,
  getDetailProduct
});
