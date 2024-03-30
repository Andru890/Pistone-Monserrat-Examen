import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./card.css";

const Card = ({ name, username, id, isFavorite, dispatch  }) => {
  const [renderCount, setRenderCount] = useState(0);

  const addOrRemoveFavorite = () => {
    if (isFavorite) {
      
      dispatch({ type: 'REMOVE_FAVORITE', payload: {name, username, id} });
    } else {
      
      dispatch({ type: 'ADD_FAVORITE', payload: {name, username, id} });
    }
  };


  const addFav = () => {
  
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
   
    const isAlreadyFavorite = currentFavorites.some((favorite) => favorite.id === id);

    if (!isAlreadyFavorite) {
     
      currentFavorites.push({ id, name, username });


      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
      alert("Card added to favorites!");
    } else {
      alert("Card will be deleted!");
      const updatedFavorites = currentFavorites.filter((favorite) => favorite.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setRenderCount(renderCount + 1);
  };

  return (
    <div className="card">
      
      <Link to={`/dentista/${id}`}>
        <img src="./images/doctor.jpg" alt="doctor" className="card-img-top"/>
        
       
        <div className="card-text">
          <h4 className="card-title">{name}</h4>
          <div>{username} </div>
        </div>
      </Link>
    
      <button onClick={addOrRemoveFavorite} className="favButton">
        {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default Card;
