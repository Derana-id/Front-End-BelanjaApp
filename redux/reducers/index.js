import { combineReducers } from 'redux';
import detailCustomerReducer from './detailCustomer';
import detailStoreReducer from './detailStore';
import getAllBrandReducer from './brand';
import getAllCategoryReducer from './categoty';
import detailMyProductReducer from './detailMyProduct';
import getMyOrderReducer from './myOrderBuyer';
import myAddressReducer from './myAddress';
import myCart from './myCart';
import myTransaction from './mytransaction';
import getAllProducts from './getAllProducts';
import getPopular from './popularProducts';
import getDetailProduct from './getDetailProduct';
import getIdProfile from './getIdProfile';
import getIdStore from './getIdStore';
import getAllCategory from './getCategory';

export default combineReducers({
  detailCustomer: detailCustomerReducer,
  detailStore: detailStoreReducer,
  allCategory: getAllCategoryReducer,
  allBrand: getAllBrandReducer,
  myProduct: detailMyProductReducer,
  myOrder: getMyOrderReducer,
  myAddress: myAddressReducer,
  myCart,
  myTransaction,
  getAllProducts,
  getPopular,
  getDetailProduct,
  getIdProfile,
  getIdStore,
  getAllCategory
});
