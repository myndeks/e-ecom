import * as types from './types'

const DEFAULT_STATE = {
  addToCart: [],
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case types.ADD_TO_CART:
      console.log('array', action.item);
      console.log('called', action.quantity);

      const newQuantity = {
        choosedQuantity: action.quantity
      }

      const newArray = action.item;

      const combainedArray = Object.assign(newQuantity,newArray);
      console.log('new array', combainedArray)

      const { addToCart } = state
      
      return { ...state,  addToCart: addToCart.concat(combainedArray)};


      default:
    return state;

  }
}

export default reducer;
