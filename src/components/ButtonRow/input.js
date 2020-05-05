import React from "react"

const Input = props => {
  return (
    <div>
      <li>
        <input
          type="radio"
          value={props.value}
          id={props.display}
          onChange={props.change}
        />
        <label htmlFor={props.display} id={props.display}>
          {props.display}
        </label>
      </li>
    </div>
  )
}
export default Input
