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
              <img src={Logo} alt=" " width="120" height="55" alt="Global Resilience Partnership Logo" />
            </div>
            <li>
              <Link to="/404">About Us</Link>
            </li>
            <li>
              <Link to="/joinus">Join Us!</Link>
            </li>
            <li>
              <Link to="/404">Challenges</Link>
            </li>
            <li>
              <Link to="/404">News</Link>
            </li>
            <li>
              <Link to="/404">Events</Link>
            </li>
            <li>
              <Link to="/404">Resources</Link>
            </li>
            <div className="socialmedia">
              <img src={Socialmedia} width="138" height="40" alt="Social media logos" />
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
