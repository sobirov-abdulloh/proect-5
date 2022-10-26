import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
      <h1>logo</h1>
      <Link to={"/"}>home</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/registor"}>register</Link>
    </nav>
  )
}

export default Navbar