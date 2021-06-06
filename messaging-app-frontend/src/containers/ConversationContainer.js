import React, { Component } from 'react'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'

export default class ConversationContainer extends Component {
  renderMessages = () => {
    this.props.messages.map(message => <Message message={message} />)
  }

  render() {
    return(
      <div className={convoContainer}>
        {this.renderMessages}
        <MessageInput />
      </div>
    )
  }
}
