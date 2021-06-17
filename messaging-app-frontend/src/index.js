import React from 'react';
import ReactDOM from 'react-dom';
import MessagingApp from './MessagingApp';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
const store = createStore(rootReducer, undefined, composedEnhancer)


ReactDOM.render(
  <Provider store={store}>
    <MessagingApp />
  </Provider>,
  document.getElementById('root')
);
