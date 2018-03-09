import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS
} from '../actions';

const intialState = {
  cheeses: [],
  loading: false,
  error: null
};

const user = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CHEESES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CHEESES_SUCCESS:
      return {
        ...state,
        loading: false,
        cheeses: action.cheeses
      };
    case FETCH_CHEESES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default user;
