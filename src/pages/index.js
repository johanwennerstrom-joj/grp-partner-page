import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

// Data
import Data from "../data/partners.json"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnerCard from "../components/PartnerCard/index"

const IndexPage = () => {
  // Destructuring JSON data
  const { partners } = Data

  // Start of a filter function.
  const filter = (data, query1) => {
    const queryTrue = []
    const queryFalse = []

    data.map(item => {
      item.workingRegion.includes(`${query1}`)
        ? queryTrue.push(item)
        : queryFalse.push(item)
    })
    console.log(queryTrue, queryFalse)
  }
  useEffect(() => {
    filter(partners, "Europe")
  })

  return (
    <Layout>
      <SEO title="Home" />
      {/* Hardcoded just as an example */}
      <PartnerCard type="Zurich" theme="Private" hq="Switzerland" workingRegion="Global" website="www.zurich.com" />
    </Layout>
  )
}

export default IndexPage
