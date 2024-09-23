import React from 'react'
import GetProductos from '../Services/GetProductos'
import { useEffect, useState } from 'react';
import '../Style/Servicios.css'

function ProductosComponents() {
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
          const Productos = await GetProductos();
         
          
          setProductos(Productos);
     
        };
        fetchProductos();
      }, [])

      return (
        <div className='ContenedorServicios'>
          <h1>Productos</h1>
          <div className='ImagenesServices' > 
           {Productos.length > 0 ?( 
           Productos.map((Productos) => (
            <div key={Productos.id}>
                <h2>{Productos.Nombre} </h2>  
                <img src={Productos.Imagen} alt={Productos.Nombre} /> 
              <p>{Productos.Descripcion}</p>
            </div>
           
           ))
        ) :( 
            <p>No hay Servicios Disponibles</p>
        )}
       </div>
        </div>
      );
    };

export default ProductosComponents