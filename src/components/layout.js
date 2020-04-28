import React from "react"
import NavBar from "./NavBar/index"
import Header from "./Header/index"
import Button from "./Button/index"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>

      <NavBar />
      <main>{children}</main>
=======
      <main>
        {" "}
        <NavBar />
        <Header button={<Button />} />
        {children}
      </main>

    </>
  )
}

export default Layout
