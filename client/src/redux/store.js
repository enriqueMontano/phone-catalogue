import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export { store };
