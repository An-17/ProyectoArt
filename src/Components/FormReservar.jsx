import Imagen from '../img/IMGN.jpg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../Style/Reservar.css'

const FormReservar = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_yqz9lka', 'template_uixp3eb', form.current, 'XQA0aObAn_B1mo-GN')
      .then(
        () => {
          Swal.fire({
            title: "Muy bien!",
            text: "Correo Enviado!",
            icon: "success"
        
          });
        }
      );
  };

  return (
    <div>
<div>
<img
              src= {Imagen}
              width="1349"
              height="405"
              className="Imagen"
             
            />
</div>

<br /><br /><br /><br /><br />
    <div className='Form'>
    <br /><br /> 
    <h1 className= "Titulo"  >¡Agenda tu cita!</h1>
    <div className="lineaN"></div>
    <br /><br />


      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre completo (obligatorio):</label><br />

        <input type="text" name="Name" placeholder="Nombre" className='InputNombre' required /><br /><br />
        
        <label>Correo electrónico (obligatorio):</label><br />
        <input type="email" name="Correo" className='InputCorreo' placeholder="Correo Electronico" required /><br /><br />

        <label>Teléfono (opcional):</label><br />
        <input type='text' name="Numero"className='InputTelefono' placeholder="Teléfono" /><br /><br />

        <label> Mensaje (Obligatorio):</label><br />
        <input type='text' name="Mensaje" placeholder="Escribir un Mensaje" className='InputMensaje' required /><br /><br />


        <div className="Boton">
  <button>
    Enviar! 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
      </form><br /><br />
    </div>
    </div>
  );
};


export default FormReservar