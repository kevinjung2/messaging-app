import React from 'react'
import App from './App'
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ConversationContainer from './containers/ConversationContainer'
import Conversations from './containers/Conversations'

function MessagingApp(props) {
  const loggedIn = () => {
    debugger
    if (props.token === "") {
      return false
    }
    return true
  }

  return (
    <Router>
      <div>
        <Route exact path="/" > {loggedIn() ? <Redirect to="/messenger" /> : <Redirect to="/login" />} </Route>
        <Route path="/messenger"> {loggedIn() ? <App /> : <Redirect to="/login" />} </Route>
        <Route path="/login" > {loggedIn() ? <Redirect to="/messenger" /> : <Login />} </Route>
        <Route path="/signup" > {loggedIn() ? <Redirect to="/messenger" /> : <Signup />} </Route>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(MessagingApp)
