import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
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
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: this.state})
    }).then(resp => resp.json())
    .then(token => this.handleSignup(token))
    this.setState({
      username: "",
      password: "",
    })
  }

  handleSignup = (token) => {
    console.log(token);
    if (token.jwt) {
      this.props.login(token.jwt)
      this.setState({
        redirect: '/messenger'
      })
    } else {
        this.setState({
          error: "Invalid Username or Password"
      })
    }
  }

  render(){
    return(
      <div className="signup">
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up Below: </h3>
          <input className="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <input className="password" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input className="submit" type="submit" value="Sign Up" />
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

export default connect(null, mapDispatchToProps)(Signup)
