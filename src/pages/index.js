import React, { useEffect, useState } from "react"

// Data
import Data from "../data/partners.json"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
// import PartnerCard from "../components/PartnerCard/index"
// import CardContainer from "../components/CardContainer/index"
import ButtonRow from "../components/ButtonRow/index"

const IndexPage = e => {
  // Destructuring JSON data
  const { partners } = Data

  // State
  const [sort, setSort] = useState("workingRegion")
  const [query, setQuery] = useState("Africa")
  const [filtered, setFiltered] = useState([])
  const [unfiltered, setUnfiltered] = useState([])
  const [alphabeticPartner, setAlphabeticPartner] = useState([])
  const [input, setInput] = useState("")

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
    partners.sort()
    setAlphabeticPartner(partners)
  }, [])

  const logInput = () => {
    setInput(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Home" />

      {/* <ButtonRow changed={logInput}  /> */}

      {/* <CardContainer>
        {alphabeticPartner.map(partner => {
          return (
            <PartnerCard
              image={partner.image}
              organisation={partner.organisation}
              type={partner.type}
              theme={partner.themes}
              hq={partner.hq}
              workingRegion={partner.workingRegion}
              website={partner.website}
              key={partner.id}
            />
          )
        })}
      </CardContainer> */}

      {/* <CardContainer>
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
      </CardContainer> */}
    </Layout>
  )
}

export default IndexPage
