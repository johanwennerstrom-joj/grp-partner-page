import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hey, David made a pull request </h2>
    <h2>
      Try putting something here just for git practice if you need it! And if i
      think you have behaved well i will merge it!
    </h2>
  </Layout>
)

export default IndexPage
