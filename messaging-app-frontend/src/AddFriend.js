import React, { Component } from 'react';
import './css/AddFriend.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


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
        Authorization: `bearer ${this.props.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: {username: this.state.username}})
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
          <input className="friend-username" placeholder="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <input className="friend-submit" type="submit" value="Add Friend" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(AddFriend)
