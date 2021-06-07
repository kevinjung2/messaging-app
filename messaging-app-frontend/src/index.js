import React from 'react';
import ReactDOM from 'react-dom';
import MessagingApp from './MessagingApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <MessagingApp />
  </Provider>,
  document.getElementById('root')
);
