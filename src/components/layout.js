import React from "react"

// Component imports, try to keep all the imports here and keep it tidy! :)
import NavBar from "./NavBar/index"
import Header from "./Header/index"
import Button from "./Button/index"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>

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
