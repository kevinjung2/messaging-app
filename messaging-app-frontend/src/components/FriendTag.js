import React from 'react'

function FriendTag(props) {
  return(
    <div className="friendtag">
      <p>{props.friend.username}</p>
    </div>
  )
}

export default FriendTag
