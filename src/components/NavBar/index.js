import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div>
      <Link>About Us</Link>
      <Link to="/404">Join Us!</Link>
      <Link>Challenges</Link>
      <Link>News</Link>
      <Link>Events</Link>
      <Link>Resources</Link>
    </div>
  )
}

export default NavBar
