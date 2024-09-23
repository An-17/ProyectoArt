import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Reservar from '../Pages/Reservar';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Contactanos from '../Pages/Contactanos';
import Admi from '../Pages/Admi';
import TiendaOnline from '../Pages/TiendaOnline';
import Servicios from '../Pages/Servicios'
import HomeAdmi from '../Pages/HomeAdmi';
import Productos from '../Pages/Productos'
import ProtectedRoute from '../../ProtectedRoute';


const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= '/Login' element={<Login/>} />
          <Route path= '/Reservar' element={<Reservar/>} /> 
          <Route path= '/Contactanos' element= {<Contactanos/>}  /> 
          <Route path= '/TiendaOnline' element={<TiendaOnline/>} /> 
          <Route path= "/Servicios" element={<Servicios/>} />
          <Route path= '/Register' element={<ProtectedRoute><Register /></ProtectedRoute>} /> 
          <Route path= '/Admi' element={<ProtectedRoute><Admi /></ProtectedRoute>} />
          <Route path= "/HomeAdmi" element={<ProtectedRoute>< HomeAdmi /></ProtectedRoute>} />
          <Route path= "/Productos" element={<ProtectedRoute><Productos /></ProtectedRoute>} />
        </Routes>
      </Router>
    );
  };
  
  export default Routing;