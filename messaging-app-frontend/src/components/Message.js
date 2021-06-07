import React from 'react'

export default function Message(props) {
  return(
    <div className="message">
      <span className="user">{props.message.user}</span>
      <span className="content">{props.message.content}</span>
      <span className="timestamp">{props.message.time}</span>
    </div>
  )
}
