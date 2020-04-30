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
  // Destructuring JSON data
  const { partners } = Data

  // State
  const [sort, setSort] = useState("workingRegion")
  const [query, setQuery] = useState("Africa")
  const [filtered, setFiltered] = useState([])
  const [unfiltered, setUnfiltered] = useState([])

  const filter = data => {
    const queryTrue = []
    const queryFalse = []

    data.map(item => {
      item[sort].includes(`${query}`)
        ? queryTrue.push(item)
        : queryFalse.push(item)
    })
    setFiltered(queryTrue)
    setUnfiltered(queryFalse)
  }

  useEffect(() => {
    filter(partners)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <CardContainer>
        {filtered.map(item => {
          return (
            <PartnerCard
              image={item.image}
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

      <h1>Separation Line</h1>
      <CardContainer>
        {unfiltered.map(item => {
          return (
            <PartnerCard
              organisation={item.organisation}
              type={item.type}
              theme={item.themes}
              hq={item.hq}
              workingRegion={item.workingRegion}
              website={item.website}
              key={item.id}
              image={item.image}
            />
          )
        })}
      </CardContainer>
    </Layout>
  )
}

export default IndexPage
