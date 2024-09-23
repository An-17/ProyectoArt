import React from 'react'
import NavbarAdmi from '../Components/NavbarAdmi'
import FormProductos from '../Components/FormProductos'
import FooterHome from '../Components/FooterHome'
import Carrusel from '../Components/Carrusel'


function Admi() {
  return (
    <div>
        <NavbarAdmi/>
        <Carrusel/>
        <br /><br /><br /><br /><br /> 
        <FormProductos/>
        <br /><br /><br /><br /><br />
        <FooterHome/>    
    </div>
  )
}

export default Admi