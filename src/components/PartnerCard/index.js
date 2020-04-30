import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const PartnerCard = props => {
  return (
    <>
      <img loading="lazy" src={props.image} alt={props.alt} />
      <h3>Type:{props.type}</h3>
      <h3>Theme:{props.theme}</h3>
      <h3>Headquarters:{props.hq}</h3>
      <h3>Working Region:{props.workingRegion}</h3>
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        WEBSITE{props.website}
      </a>
    </>
  )
}

export default PartnerCard
