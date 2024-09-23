import React from 'react';
import '../Style/FormAdmi.css';
import { useEffect, useState } from 'react';
import GetProductos from '../Services/GetProductos'
import PostProductos from '../Services/PostProductos';
import Swal from 'sweetalert2'

function FormProductos() {



  
 // const [NombreActualizado, setNombreActualizado] = useState("")
 // const [DescripcionActualizada, setDescripcionActualizada] = useState("")
// const [ImagenActualizada, setImagenActualizada] = useState("")

 // const CargarEditNombreActualizado = (event) => {
 //   setNombreActualizado(event.target);
 // };

//  const CargarEditDescripcionActualizada = (event) => {
//    setDescripcionActualizada(event.target);
  //};

 // const CargarEditImagenActualizada = (event) => {
 //   setImagenActualizada(event.target);
//};

    const [Productos, setProductos] = useState([]);

    const [Nombre, setNombre] = useState('');
    const [Descripcion, setDescripcion] = useState('')
    const [Imagen, setImagen] = useState('');

    useEffect(() => {
      const fetchProductos = async () => {
        const Productos = await GetProductos();
       
        setProductos(Productos);
   
      };
      fetchProductos();
    }, []) //cierre del useEffect


    function  CargaNombre(event) {
        setNombre(event.target.value);
      }
    
      function CargaDescripcion(event) {
        setDescripcion(event.target.value);
      }
    
    function CargaImagen (event) {
        const Img = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagen( reader.result)
         
        }
        reader.readAsDataURL(Img);
      }
      
  
     const Cargar = ()  => {   

        if (Nombre.trim() === "") {
          console.log("Este dato es invalido");
           
            
         }if (Descripcion.trim() === "" ) {
           console.log("Este dato es invalido");  

      
        }if (Imagen.trim() === "" ) {
            console.log("Este dato es invalido")
      
      
         } if (Nombre.trim() && Descripcion.trim() && Imagen.trim ()) {
          PostProductos(Nombre, Descripcion, Imagen)
             Swal.fire({
      title: "Muy bien!",
      text: "Usuario Registrado!",
      icon: "success"
    });


         }
 
        }
  
  return (

<div>  

 <div className='Form'>
  <br /><br />
       <h2>Agregar un Producto</h2>
       <br />
  <div>
     <label htmlFor="Nombre">Nombre del Articulo</label>
     <br />
     <input
     type="text"  id="Nombre"  name="Nombre"  placeholder="Nombre"
     value={Nombre}
     onChange={CargaNombre}
     required
     />
 </div>
<br />
  <div>
    <label htmlFor="Descripcion">Descripción</label>
    <br />
    <input
    type="text"
    id="Descripcion"
    name="Descripcion"
    placeholder="Ingrese una Descripcion"
    value={Descripcion}
    onChange={CargaDescripcion}
    required
  />
 </div>
 <br />
 
 <div>
    <label htmlFor="Imagen">Imagen</label>
    <br />
    <input
    type="file"
    id="Imagen"
    name="Imagen"
    placeholder="Imagen"
    onChange={CargaImagen}
    required
    className='inputImg'
    />

 </div>
 <br />
 <div> 
  
    <button onClick={Cargar} >Agregar</button>

    </div>
<br /><br />
     </div>
<br /><br /> <br /> <br />
<div className='ContenedorServicios'>
<h1>Productos</h1>
     <div className='ImagenesServices' > 
{Productos.length > 0 ?( 
  Productos.map((Productos) => (
  <div key={Productos.id}>
      <h2>{Productos.Nombre} </h2>  
      <img src={Productos.Imagen} alt={Productos.Nombre} /> 
    <p>{Productos.Descripcion}</p>

<button>Editar</button>  
<button>Eliminar</button>
  </div>
 ))
) :( 
  <p>No hay Productos Disponibles</p>
)}
  </div>
  </div>
</div>
 
)}// Cierre de la función FormProductos

export default FormProductos