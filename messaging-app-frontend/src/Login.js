import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: this.state})
    }).then(resp => resp.json())
    .then(token => this.handleLogin(token))
    this.setState({
      username: "",
      password: ""
    })
  }

  handleLogin = (token) => {
    console.log(token);
    if (token.jwt) this.props.login(token.jwt)
  }

  render(){
    return(
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <label>Password: </label>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: token => dispatch({type: "AUTHORIZE", token: token })
  }
}

export default connect(null, mapDispatchToProps)(Login)
