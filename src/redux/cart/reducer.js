import * as types from './types'

const DEFAULT_STATE = {
  addToCart: [ JSON.stringify(localStorage.getItem("items")) ],
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case types.REMOVE_TO_CART:
        console.log('the state', state.addToCart)
        console.log('action id is', action.itemId)
        return { ...state, addToCart: state.addToCart.filter((item) => item.id !== action.itemId) };

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

      localStorage.setItem("items", JSON.stringify(addToCart.concat(combainedArray)));

      return { ...state,  addToCart: addToCart.concat(combainedArray)};


      default:
    return state;

  }
}

export default reducer;
