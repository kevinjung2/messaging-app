import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchMessages from '../actions/fetchMessages'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'


class ConversationContainer extends Component {

  componentDidMount() {
    this.messageRetrieval = setInterval(this.handleFetch, 5000)
  }

  handleFetch = () => {
    if (this.props.convo_id) {
      this.props.fetchMessages({convo_id: this.props.convo_id, token: this.props.token})
    }
  }

  componentWillUnmount() {
    clearInterval(this.messageRetrieval)
  }

  render() {
    return(
      <div className="convoContainer">
        { this.props.messages.map(allMessages => allMessages.map(message => <Message message={message} key={message.id}/>)) }
        <MessageInput fetchMessages={this.fetchMessages}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    convo_id: state.message.currentConvo,
    messages: state.message.messages,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: convo_id => dispatch(fetchMessages(convo_id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
