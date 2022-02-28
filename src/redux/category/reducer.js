import * as types from './types'

const DEFAULT_STATE = {
  choosed_cat: 'tables',
  loading: false,
  data: [],
  error: null
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    
    case types.CHOOSE_CAT:
      return { ...state,  choosed_cat: action.id};

    case types.FETCH_CAT_REQUEST:
      return {...state, loading: true}

    case types.FETCH_CAT_SUCCES:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }

    case types.FETCH_CAT_FAILURE:
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
