import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import category from '../redux/category';
import products from '../redux/products';
import cart from '../redux/cart';


const rootReducer = combineReducers ({
  category: category.reducer,
  products: products.reducer,
  cart: cart.reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
