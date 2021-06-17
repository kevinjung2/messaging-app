import React from 'react'

function Checkbox(props) {
  return(
    <div className="friend-checkbox">
      <input className="checkbox" onChange={props.handleCheck} id={props.id} type="checkbox" checked={props.isChecked} value={props.id} />
      <label className="checkbox-label" for={props.id} >{props.username}</label>
    </div>
  )
}

export default Checkbox
