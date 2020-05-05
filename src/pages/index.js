import React, { useState, useEffect } from "react"

// Data
import Data from "../data/partners.json"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnerCard from "../components/PartnerCard/index"
import CardContainer from "../components/CardContainer/index"
import ButtonRow from "../components/ButtonRow/index"

const IndexPage = e => {
  // Destructuring JSON data
  const { partners } = Data

  // State
  const [sort, setSort] = useState("")
  const [query, setQuery] = useState(" ")
  const [filtered, setFiltered] = useState(" ")

  const filter = data => {
    const queryTrue = []
    const queryFalse = []

    data.map(partner => {
      return partner[sort].includes(query)
        ? queryTrue.push(partner)
        : queryFalse.push(partner)
    })
    setFiltered(queryTrue)
  }

  const handleChange = e => {
    const value = e.target.value
    const split = value.split(",")

    return setSort(split[0]), setQuery(split[1])
  }

  const handleClick = e => {
    try {
      e.preventDefault()
      return filter(partners)
    } catch (error) {
      console.log("error")
    }
  }

  console.log(filtered)

  return (
    <Layout>
      <SEO title="Home" />
      <ButtonRow changed={handleChange} buttonClick={handleClick} />

      <CardContainer>
        <h1>{query}</h1>
        {filtered === " "
          ? partners.map(partner => {
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
            })
          : filtered.map(partner => {
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
      </CardContainer>
    </Layout>
  )
}

export default IndexPage
