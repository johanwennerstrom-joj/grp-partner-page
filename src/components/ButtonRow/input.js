import React from "react"
import "./index.scss"

const Input = props => {
  return (
    <li>
      <input
        type="radio"
        value={props.value}
        id={props.display}
        onChange={props.change}
      />
      <span className="checkmark"></span>
      <label htmlFor={props.display} id={props.display}>
        {props.display}
      </label>
    </li>
  )
}
export default Input
