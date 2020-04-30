import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

// Data
import Data from "../data/partners.json"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnerCard from "../components/PartnerCard/index"

const IndexPage = () => {
  //state, setQuery changes state. We will use it with the buttonrow
  const [query, setQuery] = useState("Europe")
  const [test, setTest] = useState("")

  // Destructuring JSON data

  const { partners } = Data

  // Start of a filter function.
  const filter = (data, query1) => {
    const queryTrue = []
    const queryFalse = []

    data.map(item => {
      const { workingRegion } = item
      workingRegion.includes(`${query1}`)
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

      {/* {test.map(item => {
        return (
          <PartnerCard
            key={item.id}
            type={item.type}
            theme={item.themes}
            hq={item.hq}
            workingRegion={item.workingRegion}
            website={item.website}
          />
        )
      })} */}

      {partners.map(item => {
        return (
          <PartnerCard
            key={item.id}
            type={item.type}
            theme={item.themes}
            hq={item.hq}
            workingRegion={item.workingRegion}
            website={item.website}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
