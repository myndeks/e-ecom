import * as types from './types';

export const addtoCartFunction = (item, quantity) => {
  return {
    type: types.ADD_TO_CART,
    item: item,
    quantity: quantity
  }
}
