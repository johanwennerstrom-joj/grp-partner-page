import React from "react"
import { Link } from "gatsby"

//Components
import NavBar from "../components/NavBar/index"
import JoinUsBody from "../components/JoinUs/Body/index"
import Form from "../components/JoinUs/Form/index"

const JoinUs = () => {
  return (
    <>
      <NavBar />
      <JoinUsBody />
      <Form />
    </>
  )
}

export default JoinUs
