import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  filter: filterReducer
});

export default rootReducer;
