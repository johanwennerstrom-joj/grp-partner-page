import React from "react"
import "./index.scss"

const PartnerCard = props => {
  return (
    <>
      <article className="card">
        <div className="card__img--wrapper">
          <img
            className="card__logo"
            loading="lazy"
            src={props.image}
            alt={props.alt}
          />
        </div>
        <h3 className="card__title">{props.organisation}</h3>
        <p>
          <span className="card__title">Type:</span> {props.type}
        </p>
        <p>
          <span className="card__title">Theme:</span> {props.theme}
        </p>
        <p>
          <span className="card__title">Headquarters:</span> {props.hq}
        </p>
        <p>
          <span className="card__title">Working Region:</span>{" "}
          {props.workingRegion}
        </p>
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          <span className="card__title">WEBSITE</span>
        </a>
      </article>
    </>
  )
}

export default PartnerCard
