import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div>nitro</div>
        <ul>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/AddPage'}><li>Add</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar