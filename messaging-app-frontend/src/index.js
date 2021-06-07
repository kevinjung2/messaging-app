import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login';
import Signup from './signup';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import rootReducer from './reducers/index';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
