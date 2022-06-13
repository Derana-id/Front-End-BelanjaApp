import { combineReducers } from 'redux';
import detailUser from './detailUser';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';
import getDetailProduct from './getDetailProduct';
import getIdProfile from './getIdProfile';
import getIdStore from './getIdStore';

export default combineReducers({
  detailUser,
  getAllProducts,
  getPopular,
  getDetailProduct,
  getIdProfile,
  getIdStore
});
