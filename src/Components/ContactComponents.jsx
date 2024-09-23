import React from 'react'
import '../Style/ContactComponents.css'
import Instagram from '../img/LogoInstagram.png'
import Ubicacion from '../img/pin.png'
import Telefono from '../img/telefono.webp'
import Email from '../img/mail.webp'
import Facebook from '../img/LogoFace.png'
import { Link } from 'react-router-dom'




function ContactComponents() {
  return (
<div> 
                                    <br /><br />
      <div><h1 className='TituloContactanos' >Contáctenos</h1></div>
      <div className="linea"></div>
      <br /><br />


   <div className='Cuadros' >  


       <div className='Ubicación'>

           <img
              src= {Ubicacion}
              width="80"
              height="70"
              className="Logo"
             />
  
             <h3> Ubicación</h3>
            <p>Nosara, Barrio Arenales 
             <br />
             de la Musmani 100 metros este</p>
     
        </div>
 

         <div className='Llamanos' >

            <img
              src= {Telefono}
              width="60"
              height="60"
              className="Logo"
             />
             <h3>LLamanos</h3>
             <p>+506 6157 4826</p>

          </div> 



          <div className='Correo' >
                <img
                 src= {Email}
                 width="95"
                 height="95"
                 className="Logo"
               />
                <h3>Correo Electronico</h3>
               <p>ruizgjk@gmail.com</p>

          </div> 


                   <br /><br />



    </div>

    <div><h1 className='TituloContactanos2' >Redes Sociales</h1></div>
                 <div className="linea2"></div>

<br /><br />
            <div className='Redes' >  

             
                <div className='Instagram' >
                 
                      <Link to="https://www.instagram.com/art_barbershop_nosara/"> 
                      <img
                           src= {Instagram}
                           width="80"
                           height="60"
                           
                        /></Link>
                       <h3>Instagram</h3>
                       <p>art_barber_shop_nosara</p>
                </div> 



                <div className='Facebook' >
                   <Link to="https://www.facebook.com/ArtBarberShopNosara/?locale=es_LA"> 
                    <img
                        src= {Facebook}
                       width="94"
                       height="60"
                     /></Link>
                    <h3>Facebook</h3>
                    <p>Art Barber Shop Nosara</p>

                  </div> 



             </div>
</div>
  )
}

export default ContactComponents