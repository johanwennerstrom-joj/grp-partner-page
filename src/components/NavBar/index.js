import React from "react"
import { Link } from "gatsby"
import "./index.scss"
import Logo from "./GRPlogo.png"
import Socialmedia from "./socialmedia.png"

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <ul>
            <div className="logo">
              <img src={Logo} width="120" height="55" alt="Global Resilience Partnership Logo" />
            </div>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/joinus">Join Us!</Link>
            </li>
            <li>
              <Link to="/">Challenges</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">Resources</Link>
            </li>
            <div className="socialmedia">
              <Link to="/"><img src={Socialmedia} width="138" height="40" alt="Social media logos" /></Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
