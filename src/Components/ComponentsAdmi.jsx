import React from 'react'
import '../Style/HomeAdmi.css'
import {Link} from "react-router-dom";





function ComponentsAdmi() {
  return (
    <div>
        <div className='BienvenidaAdmi' >
          <div className='TextoBienvenida'> 
            <h1>Bienvenidos</h1>
            <p>Esta Pagina es exclusiva para Administradores Aqui podrás encontrar enlaces que te llevaran a paginas para añadir nuevos productos, nuevos Servicios y añadir a mas Administadores</p>
            </div>
        </div>
<br /><br /><br /><br /><br />

<div className="wrapper">
<Link to= "/Register">
  <button className='BotonAdmi' >
    Registrar un nuevo Usuario
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
  </Link>
</div>

<div className="wrapperProductos">
<Link to= "/Productos">
  <button className='BotonProductos'>
    Agregar un nuevo Producto
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
  </Link>
</div>

<div className="wrapperServicio">
<Link to= "/Admi">
  <button className='BotonServicios'>
    Agregar un nuevo Servicio
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
  </Link>
</div>
<br /><br /><br />
    </div>
  )
}

export default ComponentsAdmi