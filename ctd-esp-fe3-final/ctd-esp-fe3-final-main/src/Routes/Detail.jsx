import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Detail = () => {

  const { state } = useTheme();
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';


  const { id } = useParams(); 
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
  
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);


  return (
    <div className={`page ${themeClass}`}>
      <Navbar/>
      <h1>Detail Dentist {id} </h1>
     
      {dentist ? (
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      ) : (
        <p>Cargando...</p>
      )}
    <Footer/>
    </div>
  )
}

export default Detail