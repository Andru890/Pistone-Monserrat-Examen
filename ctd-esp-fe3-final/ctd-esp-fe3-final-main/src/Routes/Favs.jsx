import React, { useEffect, useState } from 'react';
import Card from "../Components/Card";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useTheme } from '../Context/ThemeContext';




const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);
 
  const { state } = useTheme();
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
   
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritos(favorites);
  }, []);

  return (
    <div className={`page ${themeClass}`}>
      <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
   
        {favoritos.length > 0 ? (
        favoritos.map((favorito) => (
          <div key={favorito.id}>
          
            <Card name={favorito.name} username={favorito.username} id={favorito.id}/>
          </div>
        ))
      ) : (
        <p>No tienes odontologos destacados.</p>
      )}
      </div> 
      <Footer/>
    </div>
  );
};

export default Favs;

