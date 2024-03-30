import React from 'react'

import DentistList from '../Components/DentistList'
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Home = () => {
  const { state } = useTheme();

  return (
    <div className={`page ${state.theme}`}>
      <Navbar/>
      <h1 className='TituloHome'>Home</h1>
      <div className='card-grid'>
        <h1 className='ListOdon'>Lista de Odontólogos</h1>
        <DentistList />
      </div>
    <Footer/>
    </div>
  )
}

export default Home