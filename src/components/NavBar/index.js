import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/404">About Us</Link></li>
        <li><Link to="/joinus">Join Us!</Link></li>
        <li><Link to="/404">Challenges</Link></li>
        <li><Link to="/404">News</Link></li>
        <li><Link to="/404">Events</Link></li>
        <li><Link to="/404">Resources</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
