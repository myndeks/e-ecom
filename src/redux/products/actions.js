import axios from 'axios';

import * as types from './types';

export const fetchProductRequests = () => {
  return {
    type: types.FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductSucces = (cat) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCES,
    payload: cat
  }
}

export const fetchProductFailure = (error) => {
  return {
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProcucts = (category = 'tables') => {
  return (dispatch) => {
    dispatch(fetchProductRequests);
       axios.get(`https://6218fa5181d4074e859df204.mockapi.io/categories/${category}/items`)
     .then(res => {
       const categories = res.data;
       dispatch(fetchProductSucces(categories));
     })
     .catch(error => {
       const errorMsg = error.message;
       dispatch(fetchProductFailure(errorMsg));
     })
  }
}
