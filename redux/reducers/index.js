import { combineReducers } from 'redux';
import detailUser from './detailUser';
import myCart from './myCart';
import myTransaction from './mytransaction';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';
import getDetailProduct from './getDetailProduct';
import getAllCategory from './getCategory';

export default combineReducers({
  myCart,
  myTransaction
  detailUser,
  getAllProducts,
  getPopular,
  getDetailProduct,
  getAllCategory
});
