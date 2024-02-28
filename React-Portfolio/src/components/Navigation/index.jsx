import { NavLink } from 'react-router-dom'

function Navigation() {

  return (
    <>
      {/* NavLink for the Home page, with the 'to' prop set to "/" */}
      <NavLink to="/">Home</NavLink>
      {/* NavLink for the About page, with the 'to' prop set to "/about" */}
      <NavLink to="/about">About</NavLink>
      {/* NavLink for the Contact page, with the 'to' prop set to "/contact" */}
      <NavLink to="/contact">Contact</NavLink>
    </>
  )
}







export default Navigation