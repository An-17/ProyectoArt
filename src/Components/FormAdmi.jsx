import React, { useEffect, useState } from 'react'; // Importa React y hooks
import '../Style/FormAdmi.css'; // Importa los estilos CSS
import GetServices from '../Services/GetServices'; // Importa función para obtener servicios
import PostServices from '../Services/PostServices'; // Importa función para crear nuevos servicios
import Swal from 'sweetalert2'; // Importa SweetAlert para mostrar alertas

function FormAdmi() {  
  // Declaración de estados
  const [Services, setServices] = useState([]); // Array para almacenar los servicios
  const [Nombre, setNombre] = useState(''); // Estado para el nombre del servicio
  const [Descripcion, setDescripcion] = useState(''); // Estado para la descripción del servicio
  const [Imagen, setImagen] = useState(''); // Estado para la imagen del servicio

  // useEffect para cargar los servicios al montar el componente
  useEffect(() => {
    const fetchServices = async () => {
      const Datos = await GetServices(); // Obtiene los servicios desde el servidor
      setServices(Datos); // Actualiza el estado con los servicios obtenidos
    };
    fetchServices(); // Llama a la función para cargar servicios
  }, []); // El segundo argumento vacío significa que solo se ejecuta una vez al montar

  // Función para actualizar el estado de Nombre
  const cargaNombre = (event) => setNombre(event.target.value);
  // Función para actualizar el estado de Descripcion
  const cargaDescripcion = (event) => setDescripcion(event.target.value);
  // Función para manejar la carga de imágenes
  const cargaImagen = (event) => {
    const Img = event.target.files[0]; // Obtiene la imagen seleccionada
    const reader = new FileReader(); // Crea un nuevo FileReader
    reader.onloadend = () => setImagen(reader.result); // Cuando se carga la imagen, actualiza el estado
    reader.readAsDataURL(Img); // Lee la imagen como una URL
  };

  // Función para agregar un nuevo servicio
  const cargar = async () => {
    // Verifica que los campos no estén vacíos
    if (!Nombre.trim() || !Descripcion.trim() || !Imagen.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
      });
      return; // Detiene la función aquí
    }
    
    // Envía los datos del nuevo servicio
    await PostServices(Nombre, Descripcion, Imagen);
    // Actualiza el estado de Services agregando el nuevo servicio
    setServices([...Services, { Nombre, Descripcion, Imagen }]);
    
    // Muestra una alerta de éxito
    Swal.fire({
      title: "Muy bien!",
      text: "Servicio Agredgado!",
      icon: "success"
    }); 
  };

  return (
    <div>
      <div className='Form'>
        <br /><br />
        <h2>Agregar un Servicio</h2>
        <br />
        <div>
          <label htmlFor="Nombre">Nombre del Artículo o Servicio</label>
          <br />
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            placeholder="Nombre"
            className='InputServices'
            value={Nombre}
            onChange={cargaNombre} // Asigna la función para manejar cambios
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
            placeholder="Ingrese una Descripción"
            className='InputServices'
            value={Descripcion}
            onChange={cargaDescripcion} // Asigna la función para manejar cambios
            required
          />
        </div>
<br />
        <div>
          <label htmlFor="imagen">Imagen</label>
          <br />
          <input
            type="file"
            id="imagen"
            name="imagen"

            onChange={cargaImagen} // Asigna la función para manejar la carga de imágenes
            required
            className='inputImg'
          />
        </div>
<br />

     <div id="ninth" className="buttonBox">
      <button className='BotonLogin'  onClick={cargar}>Agregar</button>
      </div> {/* Botón para agregar un nuevo servicio */}
        <br /><br />
      </div>
      
<br /><br /><br />
      <div className='ContenedorServicios'>
        <h1>Servicios</h1>
        <div className='ImagenesServices'> 
        {Services.length > 0 ? (
          Services.map((service) => ( // Mapea cada servicio para mostrarlo
            <div key={service.id}>
              <h2>{service.Nombre}</h2>
              <img src={service.Imagen} alt={service.Nombre} /> {/* Muestra la imagen del servicio */}
              <p>{service.Descripcion}</p> {/* Muestra la descripción del servicio */}
            </div>
          ))
        ) : (
          <p>No hay Servicios Disponibles</p> // Mensaje si no hay servicios
        )}
      </div>
       </div>
    </div>
  );
}

export default FormAdmi; // Exporta el componente

