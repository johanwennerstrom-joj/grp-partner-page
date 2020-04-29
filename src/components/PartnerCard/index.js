import React from "react"
import { Link } from "gatsby"
import "./index.scss"


const PartnerCard = (props) => {

    return (
        <>
            <h3>Type:{props.type}</h3>
            <h3>Theme:{props.theme}</h3>
            <h3>Headquarters:{props.hq}</h3>
            <h3>Working Region:{props.workingRegion}</h3>
            <Link to={props.website}>WEBSITE{props.website}</Link>
        </>
    )
}

export default PartnerCard