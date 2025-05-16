import { createStore } from 'redux';
import { counterReducer } from './reducer';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(counterReducer, reduxDevTools);

store.subscribe(() => {
  console.log('State changed:', store.getState());
});
