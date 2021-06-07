import React, { Component } from 'react'
import FriendTag from '../components/FriendTag'

class FriendsContainer extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/friends')
    .then(resp => resp.json())
    .then(friends => this.loadFriends(friends.friends))
  }

  loadFriends = friends => {
    this.setState({
      friends: friends
    })
  }


  render() {
    return(
      <div className="friendslist">
        {this.state.friends.map(friend => <FriendTag friend={friend}/>)}
        <button onClick={this.handleClick}>Add Friend</button>
      </div>
    )
  }
}
