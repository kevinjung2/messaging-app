import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const loggedIn = () => {
  if (store.token === "") {
    return false
  }
  return true
}

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <Route exact path="/" > {loggedIn ? <Redirect to="/messenger" /> : <Redirect to="/login" />} </Route> 
        <Route path="/messenger" component={App} />
        <Route path="/login" > {loggedIn ? <Redirect to="/messenger" /> : <Login />} </Route>
        <Route path="/signup" > {loggedIn ? <Redirect to="/messenger" /> : <Signup />} </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
