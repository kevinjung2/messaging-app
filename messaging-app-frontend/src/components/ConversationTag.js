import React from 'react'

export default function ConversationTag(props) {
  return(
    <div className="convo-tag">
      <span id={props.conversation.id} onClick={props.handleClick} className="user">{props.conversation.name}</span>
    </div>
  )
}
