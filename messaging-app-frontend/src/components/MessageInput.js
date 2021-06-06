import React, { Component } from 'react'

export default class MessageInput extends Component {
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

  handleSubmit = (event) => {
    event.preventDefault()

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
