import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='res'>
      <h1>FRIED CHICKEN RESTUARANTS APP</h1>
<Link to="/"  >Home</Link>
<Link to="/about"  >About</Link>

  
  </div>);
}

export default Navbar