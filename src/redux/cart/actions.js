import * as types from './types';

export const addtoCartFunction = (id) => {
  return {
    type: types.ADD_TO_CART,
    id: id
  }
}
