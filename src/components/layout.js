import React from "react"

// Component imports, try to keep all the imports here and keep it tidy! :)
import NavBar from "./NavBar/index"
import Header from "./Header/index"
import Footer from "./Footer/index"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
