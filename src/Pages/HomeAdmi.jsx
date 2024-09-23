import React from 'react'
import NavbarAdmi from '../Components/NavbarAdmi'
import ComponentsAdmi from '../Components/ComponentsAdmi'
import FooterHome from '../Components/footerHome'
import { useNavigate } from 'react-router-dom';


function HomeAdmi() {

  const navigate = useNavigate();

 function cerrarSesion() {
    localStorage.removeItem('Autenticado');
    navigate('/');
  };

  return (
    <div>
        <NavbarAdmi/>
        <ComponentsAdmi/>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
        <FooterHome/>
     
    </div>
  )
}

export default HomeAdmi