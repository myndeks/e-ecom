import * as types from './types'

const DEFAULT_STATE = {
  addToCart: [],
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case types.ADD_TO_CART:
      console.log('called', action.id);
      const { addToCart } = state
      return { ...state,  addToCart: addToCart.concat(action.id)};


      default:
    return state;

  }
}

export default reducer;
