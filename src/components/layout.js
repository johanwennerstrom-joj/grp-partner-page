import React from "react"
import NavBar from "./NavBar/index"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        {" "}
        <NavBar />
        {children}
      </main>
    </>
  )
}

export default Layout
