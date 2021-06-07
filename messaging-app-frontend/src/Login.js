import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: null,
    error: null
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
      password: "",
    })
  }

  handleLogin = (token) => {
    console.log(token);
    if (token.jwt) {
      this.props.login(token.jwt)
      this.setState({
        redirect: '/messenger'
      })
    } else {
        this.setState({
          error: "Incorrect Username or Password"
      })
    }
  }

  render(){
    return(
      <div className="login">
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        {this.state.error ? <p>{this.state.error}</p> : null}
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
