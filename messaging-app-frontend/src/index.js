import React from 'react';
import ReactDOM from 'react-dom';
import MessagingApp from './MessagingApp';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
// const store = createStore(rootReducer, undefined, composedEnhancer)
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <MessagingApp />
  </Provider>,
  document.getElementById('root')
);
