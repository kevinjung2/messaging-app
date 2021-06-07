import React, { Component } from 'react'
import { connect } from 'react-redux'

class MessageInput extends Component {
  constructor() {
    super()
    this.state = {
      content: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  //needs to send a post fetch request to create a message
  handleSubmit = (event) => {
    event.preventDefault()
    this.sendMessage(this.state.content)
    this.props.fetchMessages()
    this.setState({content: ""})
  }

  sendMessage = messageText => {
    fetch('http://localhost:3000/api/v1/messages', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: {
        content: messageText,
        conversation_id: this.props.convo_id
        }
      })
    })
  }

  render() {
    return(
      <div className="messageBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.content} name="content" onChange={this.handleChange} />
          <input type="submut" value="Send" name="send" />
        </form>
      </div>
    )
  }
}

mapStateToProps = state => {
  return {
    convo_id: state.message.currentConvo,
    token: state.token
  }
}

export default connect(mapStateToProps)(MessageInput)
