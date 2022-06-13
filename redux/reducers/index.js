import { combineReducers } from 'redux';
import detailUser from './detailUser';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';
import getDetailProduct from './getDetailProduct';
import getAllCategory from './getCategory';

export default combineReducers({
  detailUser,
  getAllProducts,
  getPopular,
  getDetailProduct,
  getAllCategory
});
