import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

// Data
import Data from "../data/partners.json"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnerCard from "../components/PartnerCard/index"
import CardContainer from "../components/CardContainer/index"


const IndexPage = () => {
  //state, setQuery changes state. We will use it with the buttonrow
  const [query, setQuery] = useState("Asia")
  const [test, setTest] = useState("")

  // Destructuring JSON data
  const { partners } = Data

  // Start of a filter function.
  const filter = (data, query1) => {
    const queryTrue = []
    const queryFalse = []

    data.map(item => {
      const { workingRegion } = item
      return workingRegion.includes(`${query1}`)
        ? queryTrue.push(item)
        : queryFalse.push(item)
    })
    return setTest(queryTrue)
  }
  useEffect(() => {
    filter(partners, query)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />


      <CardContainer>
        {partners.map(item => {
          return (
            <PartnerCard
              organisation={item.organisation}
              type={item.type}
              theme={item.themes}
              hq={item.hq}
              workingRegion={item.workingRegion}
              website={item.website}
              key={item.id}
            />
          )
        })}
      </CardContainer>

    </Layout>
  )
}

export default IndexPage
