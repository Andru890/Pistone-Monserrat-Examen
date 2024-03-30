import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext';



const Navbar = () => {
  const { state, dispatch } = useTheme(); 

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); 
  };

  
  return (
    <nav>
      <img src="./DH.ico" alt="dh" className='nav-img'/>
      <Link to="/home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Favs">Favs</Link>
      <button onClick={toggleTheme} className="custom-button">Theme</button>
    </nav>
  )
}

export default Navbar