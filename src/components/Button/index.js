import React from "react"

const Button = props => {
  // Added a onClick as a prop that will take the prop "clicked" when rendered. This is so we can put the logic for this in index.js instead of here

  return <button onClick={props.clicked}>Become a partner</button>
}

export default Button
