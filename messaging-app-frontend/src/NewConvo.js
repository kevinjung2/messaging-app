import React, { Component } from 'react';
import './css/AddFriend.css'
import { Redirect } from 'react-router-dom'


class NewConvo extends Component {
  state = {
    name: "",
    friends: [],
    redirect: null,
    error: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/friends', {
      method: 'GET',
      headers: {
        Authorization: this.props.token
      }
    })
    .then(resp => resp.json())
    .then(friends => this.loadFriends(friends.friends))
  }

  loadFriends = friends => {
    this.setState({
      friends: friends.map(friend => {...friend, isChecked: false})
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheck = (event) => {
    let friends = this.state.friends
    friends.forEach(friend => {
       if (friend.id === event.target.value)
          friend.isChecked =  event.target.checked
    })
    this.setState({friends: friends})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    checkedFriends = friends.filter(friend => friend.isChecked)
    user_ids = checkedFriends.map(friend => friend.id)
    fetch('http://localhost:3000/api/v1/conversations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({conversation: {name: this.state.name, user_ids: user_ids}})
    })
    this.setState({
      name: "",
      user_ids: [],
      redirect: "/messenger"
    })
  }


  render(){
    return(
      <div className="addfriend">
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <h3>Enter Conversation Name:</h3>
          <input className="name" placeholder="Conversation name" type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          { this.state.friends.map(friend => <input key={friend.id} onClick={this.handleCheck} type="checkbox" checked={friend.isChecked} value={friend.id} /> {friend.username})}
          <input className="submit" type="submit" value="Start Conversation" />
        </form>
      </div>
    )
  }
}

export default Login
