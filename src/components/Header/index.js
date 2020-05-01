import React from "react"
import Women_India from "./Women__India_5933334799-730x410.png"

console.log(Women_India)

const Header = props => {
  return (
    <header>
      <h1>Our Partners</h1>
      <p>
        GRP is a diverse partnership of more than 50 organisations joining
        forces to work towards a world where vulnerable people and places are
        able to thrive in the face of shocks, uncertainty and change.
      </p>
      <p>
        Partners are organisations active in resilience who share GRP’s vision
        and values, and who have joined the Partnership. Organisations who share
        GRP’s ambition are welcome to apply to become a Partner.
      </p>
      <img src={Women_India} width="730" height="410" alt=" " />
      {props.button}
    </header>
  )
}

export default Header
