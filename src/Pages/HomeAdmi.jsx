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
        <div className="wrapper">
  <button className='BotonCerrarSesion' onClick={cerrarSesion} >
   Cerrar Sesion
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
<br /><br />
        <FooterHome/>
     
    </div>
  )
}

export default HomeAdmi