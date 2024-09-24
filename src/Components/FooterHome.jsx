import React from 'react'
import Instagram from '../img/LogoInstagram.png'
import Facebook from '../img/LogoFace.png'
import WhatsApp from '../img/LogoWhatsApp.webp'
import '../Style/Footer.css'
import { Link } from 'react-router-dom'

function FooterHome() {
  return (
<div className='Footer'>
  <br />
  <div className='Container'>
        <div>
            <h3>Contactanos</h3>
            <p>Celular: +506 6157 4826</p>
            <p>Email: ruizgjk@gmail.com</p>
        </div>

        <div>
             <h3>Horario</h3>
             <p>de Lunes a Sabado de 9:00am a 6:00pm</p>

        </div>



        <div className='Ubicacion'>
            <h3>Ubicación</h3>
            <p>Costa Rica, Guanacaste, Nicoya, Nosara 
              <br />
            Barrio Arenales de la Musmani 100 metros este</p>
        </div> 

    </div>


 <hr className='lineaF' />
      <div className='Container2'>
  <Link to="https://www.instagram.com/art_barbershop_nosara/"> 
      <img 
              src= {Instagram}
              width="50"
              height="30"
              className="LogoIg"
              
              /></Link>


     <Link to="https://www.facebook.com/ArtBarberShopNosara/?locale=es_LA"> 
        <img
              src= {Facebook}
              width="50"
              height="32"
              className="LogoFace"
           
            /></Link>
        <img
              src= {WhatsApp}
              width="50"
              height="50"
              className="LogoW"
            />

     </div> 
<br />
</div>
  )
}

export default FooterHome