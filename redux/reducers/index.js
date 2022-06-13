import { combineReducers } from 'redux';
import detailUser from './detailUser';
import detailCustomerReducer from './detailCustomer';
import detailStoreReducer from './detailStore';
import getAllBrandReducer from './brand';
import getAllCategoryReducer from './categoty';
import detailMyProductReducer from './detailMyProduct';
import getMyOrderReducer from './myOrderBuyer';
import myAddressReducer from './myAddress';

export default combineReducers({
  detailUser,
  detailCustomer: detailCustomerReducer,
  detailStore: detailStoreReducer,
  allCategory: getAllCategoryReducer,
  allBrand: getAllBrandReducer,
  myProduct: detailMyProductReducer,
  myOrder: getMyOrderReducer,
  myAddress: myAddressReducer
});
