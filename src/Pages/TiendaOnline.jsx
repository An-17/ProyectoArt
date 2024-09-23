import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import ProductosComponents from '../Components/ProductosComponents'
import Carrusel from '../Components/Carrusel'
import FooterHome from '../Components/FooterHome'


function TiendaOnline() {
  return (
    <div>
  <NavbarHome/>
  <Carrusel/> 
  <ProductosComponents/>
  <FooterHome/>
    </div>
  )
}

export default TiendaOnline