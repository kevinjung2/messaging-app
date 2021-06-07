import React, { Component } from 'react'
import ConversationTag from '../components/ConversationTag'
import { connect } from 'react-redux'

class Conversations extends Component {

  state = {
    convos: []
  }

  componentDidMount() {
    this.fetchConversations()
  }

  fetchConversations = () => {
    fetch(`http://localhost:3000/api/v1/conversations/`, {
      method: "GET",
      headers: {Authorization: `Bearer ${this.props.token}`}
    })
    .then(resp => resp.json())
    .then(convos => this.loadConvos(convos))
  }

  loadConvos = (convos) => {
    if (convos.conversations.length > 0) {
      this.setState({
        convos: convos.conversations
      })
      this.props.swapConvo(convos.conversations[0].id)
    }
  }

  swapConvo = event => {
    this.props.swapConvo(event.target.key)
  }

  render() {
    return(
      <div className="conversations">
        {this.state.convos.map(convo => <ConversationTag key={convo.id} conversation={convo} handleClick={this.swapConvo}/>)}
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

const mapDispatchToProps = dispatch => {
  return {
    swapConvo: id => dispatch({type: "CHANGE_CONVO", convo_id: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations)
