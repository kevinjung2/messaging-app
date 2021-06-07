import React, { Component } from 'react'
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
    if (this.props.convo_id) {
      fetch(`http://localhost:3000/api/v1/conversations/${this.props.convo_id}`, {
        method: "GET",
        headers: {Authorization: `Bearer ${this.props.token}`}
      })
      .then(resp => resp.json())
      .then(convo => this.loadMessages(convo.conversation.messages))
    }
  }

  loadMessages = (messages) => {
    let importantMessages = messages.filter(message => message.content !== "INIT_MESSAGE")
    if (importantMessages.length > 0) this.setState({ messages: importantMessages })
  }

  componentWillUnmount() {
    clearInterval(this.messageRetrieval)
  }

  render() {
    return(
      <div className="convoContainer">
        {  this.state.messages.map(message => <Message message={message} key={message.id}/>) }
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
