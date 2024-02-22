import { NavLink, useLocation } from 'react-router-dom'

function Navigation() {

  return (
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    </>
  )
}







export default Navigation