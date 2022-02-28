import * as types from './types'

const DEFAULT_STATE = {
  loading: false,
  data: [],
  error: null
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case types.FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true}

    case types.FETCH_PRODUCTS_SUCCES:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }

    case types.FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      }

      default:
    return state;

  }
}

export default reducer;
