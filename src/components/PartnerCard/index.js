import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const PartnerCard = props => {
  return (
    <>
      <ul>
        <logo>{props.image}</logo>
        <h2>{props.organisation}</h2>
        <p>Type:{props.type}</p>
        <p>Theme:{props.theme}</p>
        <p>Headquarters:{props.hq}</p>
        <p>Working Region:{props.workingRegion}</p>
        <p><a href={props.website} target="_blank" rel="noopener noreferrer">
          WEBSITE
      </a></p>
      </ul>
    </>
  )
}

export default PartnerCard
