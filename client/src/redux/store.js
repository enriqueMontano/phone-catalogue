import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pending: false,
  phones: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHONES_PENDING':
      return { ...state, pending: true };

    case 'FETCH_PHONES_SUCCESS':
      return { ...state, pending: false, phones: action.payload };

    case 'FETCH_PHONES_ERROR':
      return { ...state, pending: false, error: action.error };

    default:
      return state;
  }
};

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export { store };
