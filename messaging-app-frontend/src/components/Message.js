import React from 'react'

export default function Message(props) {
  return(
    <div className="message">
      <span className="user">{props.message.user.username}: </span>
      <span className="content"> {props.message.content}  </span>
      <span className="timestamp"> -{props.message.created_at}</span>
    </div>
  )
}
