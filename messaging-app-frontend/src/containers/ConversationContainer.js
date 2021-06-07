import React, { Component } from 'react'
import ConversationTag from '../components/ConversationTag'
import { connect } from 'react-redux'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'


class ConversationContainer extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    this.messageRetrieval = setInterval(this.fetchMessages, 5000)
  }

  fetchMessages = () => {
    fetch(`http://localhost:3000/api/v1/conversations/${this.props.convo_id}`, {
      method: "GET",
      headers: {Authorization: `Bearer ${this.props.token}`}
    })
    .then(resp => resp.json())
    .then(convo => this.loadMessages(convo.messages))
  }

  loadMessages = (messages) => {
    if (messages) this.setState({ messages })
  }

  renderMessages = () => {
    this.state.messages.map(message => <Message message={message} key={message.id}/>)
  }

  componentWillUnmount() {
    clearInterval(this.messageRetrieval)
  }

  render() {
    return(
      <div className="convoContainer">
        {this.renderMessages()}
        <MessageInput fetchMessages={this.fetchMessages}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    convo_id: state.message.currentConvo,
    token: state.token
  }
}

export default connect(mapStateToProps)(ConversationContainer)
