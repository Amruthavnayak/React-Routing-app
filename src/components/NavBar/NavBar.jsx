import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
    </div>
  )
}

export default NavBar