import React, { Component } from 'react'
import FriendTag from '../components/FriendTag'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class FriendsContainer extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      redirect: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/friends', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
    .then(resp => resp.json())
    .then(friends => this.loadFriends(friends.friends))
  }

  loadFriends = friends => {
    this.setState({
      friends: friends
    })
  }

  handleClick = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    return(
      <div className="friendslist">
        {this.state.redirect ? <Redirect to="/addfriend" /> : null}
        {this.state.friends.map(friend => <FriendTag key={friend.id} friend={friend}/>)}
        <button onClick={this.handleClick}>Add Friend</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(FriendsContainer)
