import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const PartnerCard = props => {
  return (
    <>
      <div>
        <img
          class="card__logo"
          loading="lazy"
          src={props.image}
          alt={props.alt}
        />
        <h2>{props.organisation}</h2>
        <p>Type:{props.type}</p>
        <p>Theme:{props.theme}</p>
        <p>Headquarters:{props.hq}</p>
        <p>Working Region:{props.workingRegion}</p>
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          WEBSITE
        </a>
      </div>
    </>
  )
}

export default PartnerCard
