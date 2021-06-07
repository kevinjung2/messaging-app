import React from 'react'

function Checkbox(props) {
  return(
    <>
      <input onChange={props.handleCheck} type="checkbox" checked={props.isChecked} value={props.id} /> {props.username}
    </>
  )
}

export default Checkbox
