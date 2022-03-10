import * as types from './types';

export const addtoCartFunction = (item, quantity) => {
  return {
    type: types.ADD_TO_CART,
    item: item,
    quantity: quantity
  }
}

export const removeoCartFunction = (itemId) => {
  return {
    type: types.REMOVE_TO_CART,
    itemId: itemId,
  }
}
