import React from 'react'
import GetServices from '../Services/GetServices';
import { useEffect, useState } from 'react';
import '../Style/Servicios.css'

function ServiciosComponents() {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
          const Datos = await GetServices();
         
          
          setServices(Datos);
     
        };
        fetchServices();
      }, [])

      return (
        <div className='ContenedorServicios'>
          <h1>Servicios</h1>
          <div className='ImagenesServices' > 
           {Services.length > 0 ?( 
            Services.map((Services) => (
            <div key={Services.id}>
                <h2>{Services.Nombre} </h2>  
                <img src={Services.Imagen} alt={Services.Nombre} /> 
              <p>{Services.Descripcion}</p>
            </div>
           
           ))
        ) :( 
            <p>No hay Servicios Disponibles</p>
        )}
       </div>
        </div>
      );
    };

export default ServiciosComponents