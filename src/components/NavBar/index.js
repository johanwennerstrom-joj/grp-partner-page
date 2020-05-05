import React from "react"
import { Link } from "gatsby"
import "./index.scss"
import Logo from "./GrpLogo.png"
import Socialmedia from "./socialmedia.png"


const NavBar = () => {
  return (
    <>

      <nav>
        <div className="container">
          <ul>
            <div className="logo">
              <img
                src={Logo}
                alt=" "
                width="110"
                height="55" /> </div>
            <li><Link to="/404">About Us </Link></li>
            <li><Link to="/joinus">Join Us! </Link></li>
            <li><Link to="/404">Challenges </Link></li>
            <li><Link to="/404">News </Link></li>
            <li><Link to="/404">Events </Link></li>
            <li><Link to="/404">Resources </Link></li>
            <div className="socialmedia">
              <img src={Socialmedia}
                width="140"
                height="40"
              />
            </div>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default NavBar