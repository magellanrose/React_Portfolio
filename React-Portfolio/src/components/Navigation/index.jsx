import { NavLink } from 'react-router-dom'


// A single Navigation component within the header that will use NavLink components from react-router-dom
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