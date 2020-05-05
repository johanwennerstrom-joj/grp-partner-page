import React from "react"
import Women_India from "./Women__India_5933334799-730x410.png"
import "./index.scss"
import Button from "../Button/index"

const Header = props => {
  return (
    <header className="header__main">
      <h1 className="header__title">Our Partners</h1>
      <div className="header__copy-wrapper">
        <p className="text__intro">
          GRP is a diverse partnership of more than 50 organisations joining
          forces to work towards a world where vulnerable people and places are
          able to thrive in the face of shocks, uncertainty and change.
        </p>
        <p className="text__intro">
          Partners are organisations active in resilience who share GRP’s vision
          and values, and who have joined the Partnership. Organisations who
          share GRP’s ambition are welcome to apply to become a Partner.
        </p>
      </div>
      <div className="header__image_wrapper">
        <img
          className="header__image"
          src={Women_India}
          width="730"
          height="410"
          alt=" "
        />
      </div>
      <div className="header__button--wrapper">
        <Button className="header__button" route="/joinus" text="Join Us" />
      </div>
    </header>
  )
}

export default Header
