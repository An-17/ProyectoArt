import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import ContactComponents from '../Components/ContactComponents'
import Carrusel from '../Components/Carrusel'
import MapContact from '../Components/MapContact'
import FooterHome from '../Components/footerHome'



function Contactanos() {
  return (
    <div>
       <NavbarHome/>  
       <Carrusel/>
       <ContactComponents/> 
       <MapContact/>
       <br /><br /> <br />
       <FooterHome/>

     
   </div>
  )
}

export default Contactanos
