import React from "react"
import "./index.scss"

const CardContainer = ({ children }) => {
  return (
    <>
      <h1>Africa</h1>
      <div className="card-cotanier">{children}</div>
    </>
  )
}

export default CardContainer
