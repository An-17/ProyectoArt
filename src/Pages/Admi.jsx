import React from 'react'
import FormAdmi from '../Components/FormAdmi'
import NavbarAdmi from '../Components/NavbarAdmi'
import FooterHome from '../Components/FooterHome'
import Carrusel from '../Components/Carrusel'


function Admi() {
  return (
    <div>
        <NavbarAdmi/>
        <Carrusel/>
        <br /><br /><br /><br /><br /> 
        <FormAdmi/> 
        <br /><br /><br /><br /><br />
        <FooterHome/>    
    </div>
  )
}

export default Admi