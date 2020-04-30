import React from "react"

const Header = props => {
  return (
    <header>
      <p>
        GRP is a diverse partnership of more than 50 organisations joining
        forces to work towards a world where vulnerable people and places are
        able to thrive in the face of shocks, uncertainty and change. Partners
        are organisations active in resilience who share GRP’s vision and
        values, and who have joined the Partnership. Organisations who share
        GRP’s ambition are welcome to apply to become a Partner.
      </p>
      {props.button}
    </header>
  )
}

export default Header
