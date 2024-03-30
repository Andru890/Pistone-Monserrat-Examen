import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { ThemeProvider } from './Context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <Routes>
      {/* <Route path='/' element={<App/>}/> */}
      <Route path='/' element={<Navigate to="/Home"/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/favs' element={<Favs/>}/>
      <Route path='/dentista/:id' element={<Detail/>}/>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


