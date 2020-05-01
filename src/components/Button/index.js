import React from "react"
import { Link } from "gatsby"

// Css import
import "./index.scss"

const Button = props => {
  // Added a onClick as a prop that will take the prop "clicked" when rendered. This is so we can put the logic for this in index.js instead of here
  //<button onClick={props.clicked}>Become a partner</button>
  return (
    <Link to="/joinus"><button>Become a partner</button></Link>

  )

}

export default Button
