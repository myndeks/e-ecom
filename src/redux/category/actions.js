import axios from 'axios';

import * as types from './types';

export const fetchCatRequests = () => {
  return {
    type: types.FETCH_CAT_REQUEST
  }
}

export const fetchCatSucces = (cat) => {
  return {
    type: types.FETCH_CAT_SUCCES,
    payload: cat
  }
}

export const fetchCatFailure = (error) => {
  return {
    type: types.FETCH_CAT_FAILURE,
    payload: error
  }
}

export const fetchCat = () => {
  return (dispatch) => {
    dispatch(fetchCatRequests);
    axios.get('https://6218fa5181d4074e859df204.mockapi.io/categories')
     .then(res => {
       const categories = res.data;
       dispatch(fetchCatSucces(categories));
     })
     .catch(error => {
       const errorMsg = error.message;
       dispatch(fetchCatFailure(errorMsg));
     })
  }
}
