import React, { Component } from 'react';
import './css/AddFriend.css'
import { Redirect } from 'react-router-dom'


class AddFriend extends Component {
  state = {
    username: "",
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
    fetch('http://localhost:3000/api/v1/friends', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: this.state})
    })
    this.setState({
      username: "",
      redirect: "/messenger"
    })
  }


  render(){
    return(
      <div className="addfriend">
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <h3>Enter Friends Name:</h3>
          <input className="username" placeholder="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <input className="submit" type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

export default Login
