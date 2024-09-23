import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import Carrusel from '../Components/Carrusel'
import ServiciosComponents from '../Components/ServiciosComponents'
import FooterHome from '../Components/footerHome'

function Servicios() {
  return (
<div>
  <NavbarHome/>
  <Carrusel/> 
  <br /><br /><br />
  <ServiciosComponents/>
  <br /><br /><br />
  <FooterHome/>
</div>
  )
}

export default Servicios