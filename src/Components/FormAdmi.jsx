import React, { useEffect, useState } from 'react';
import '../Style/FormAdmi.css';
import GetServices from '../Services/GetServices';
import PostServices from '../Services/PostServices';
import Swal from 'sweetalert2';

function FormAdmi() {
  const [nombreActualizado, setNombreActualizado] = useState("");
  const [descripcionActualizada, setDescripcionActualizada] = useState("");
  const [imagenActualizada, setImagenActualizada] = useState("");

  const [services, setServices] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [editarServiceId, setEditarServiceId] = useState(null); 
  

  const cargarEdit = async (id) => { 
    const editServicio = {
      id, 
      nombre: nombreActualizado,
      descripcion: descripcionActualizada,
      imagen: imagenActualizada
    };

    await Updateservices(editServicio); 
    setServices(services.map(services => 
      services.id === id ? { ...services, nombre: nombreActualizado, descripcion: descripcionActualizada, imagen: imagenActualizada } : services
    ));

    // Limpiar campos después de editar
    setEditarServiceId(null); 
    setNombreActualizado("");
    setDescripcionActualizada("");
    setImagenActualizada("");
  }

 const Eliminar = async (id) => {
   await EliminarService(id); // Asegúrate de que esta función está definida
   setServices(services.filter(service => service.id !== id));
  };

  useEffect(() => {
    const fetchServices = async () => {
      const Datos = await GetServices();
      setServices(Datos);
    };
    fetchServices();
  }, []);

  const cargaNombre = (event) => setNombre(event.target.value);
  const cargaDescripcion = (event) => setDescripcion(event.target.value);
  const cargaImagen = (event) => {
    const img = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImagen(reader.result);
    reader.readAsDataURL(img);
  };

  const cargar = async () => {
    if (!nombre.trim() || !descripcion.trim() || !imagen.trim()) {
      console.log("Este dato es inválido");
  
    }if (nombre.trim() && descripcion.trim() && imagen.trim() ) {
      await PostServices(nombre, descripcion, imagen);
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
        <h2>Agregar un Artículo o Producto</h2>
        <div>
          <label htmlFor="Nombre">Nombre del Artículo o Servicio</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={cargaNombre}
            required
          />
        </div>

        <div>
          <label htmlFor="Descripcion">Descripción</label>
          <input
            type="text"
            id="Descripcion"
            name="Descripcion"
            placeholder="Ingrese una Descripción"
            value={descripcion}
            onChange={cargaDescripcion}
            required
          />
        </div>

        <div>
          <label htmlFor="Imagen">Imagen</label>
          <input
            type="file"
            id="Imagen"
            name="Imagen"
            onChange={cargaImagen}
            required
            className='inputImg'
          />
        </div>

        <button onClick={cargar}>Agregar</button>
      </div>

      <div className='ContenedorServicios'>
        <h1>Servicios</h1>
        {services.length > 0 ? (
          services.map((services) => (
            <div key={services.id}>
              {cargarEdit.Id === services.id ? (
                <div>
                  {imagenActualizada && (
                    <img src={imagenActualizada} alt={descripcionActualizada} />
                  )}
                  <input
                    type="file"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => setImagenActualizada(reader.result);
                      reader.readAsDataURL(img);
                    }}
                  />
                  <input
                    type="text"
                    value={nombreActualizado}
                    onChange={(e) => setNombreActualizado(e.target.value)}
                  />
                  <input
                    type="text"
                    value={descripcionActualizada}
                    onChange={(e) => setDescripcionActualizada(e.target.value)}
                  />
                  <button onClick={() => cargarEdit(services.id)}>Guardar Edición</button> 
                </div>
              ) : (
                <>
                  <h2>{services.nombre}</h2>
                  <img src={services.imagen} alt={services.Nombre} />
                  <p>{services.descripcion}</p>
                  <button onClick={() => setEditarserviceId(services.id)}>Editar</button>
                  <button onClick={() => setEliminarServiceId(services.id)}>Eliminar</button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No hay Servicios Disponibles</p>
        )}
      </div>
    </div>
  );
}

export default FormAdmi;