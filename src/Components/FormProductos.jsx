import React, { useEffect, useState } from 'react'; // Importa React y hooks
import '../Style/FormAdmi.css'; // Importa estilos CSS
import GetProductos from '../Services/GetProductos'; // Importa función para obtener productos
import PostProductos from '../Services/PostProductos'; // Importa función para crear nuevos productos
import Swal from 'sweetalert2'; // Importa SweetAlert para mostrar alertas

function FormProductos() {
    // Declaración de estados
    const [Productos, setProductos] = useState([]); // Array para almacenar los productos
    const [Nombre, setNombre] = useState(''); // Estado para el nombre del producto
    const [Descripcion, setDescripcion] = useState(''); // Estado para la descripción del producto
    const [Imagen, setImagen] = useState(''); // Estado para la imagen del producto

    // useEffect para cargar los productos al montar el componente
    useEffect(() => {
        const fetchProductos = async () => {
            const Productos = await GetProductos(); // Obtiene los productos desde el servidor
            setProductos(Productos); // Actualiza el estado con los productos obtenidos
        };
        fetchProductos(); // Llama a la función para cargar productos
    }, []); // El segundo argumento vacío significa que solo se ejecuta una vez al montar

    // Función para actualizar el estado de Nombre
    const CargaNombre = (event) => setNombre(event.target.value);

    // Función para actualizar el estado de Descripcion
    const CargaDescripcion = (event) => setDescripcion(event.target.value);

    // Función para manejar la carga de imágenes
    const CargaImagen = (event) => { 
        const Img = event.target.files[0]; // Obtiene la imagen seleccionada
        const reader = new FileReader(); // Crea un nuevo FileReader
        reader.onloadend = () => {
            setImagen(reader.result); // Cuando se carga la imagen, actualiza el estado
        };
        reader.readAsDataURL(Img); // Lee la imagen como una URL
    };

    // Función para agregar un nuevo producto
    const Cargar = async () => {
        // Verifica que los campos no estén vacíos
        if (Nombre.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
              });
            return; // Detiene la función aquí
        }
        if (Descripcion.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
              });
            return; // Detiene la función aquí
        }
        if (Imagen.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
              });
            return; // Detiene la función aquí
        }
        
        // Envía los datos del nuevo producto
        await PostProductos(Nombre, Descripcion, Imagen);
        
        // Muestra una alerta de éxito
        Swal.fire({
            title: "Muy bien!",
            text: "Producto Registrado!",
            icon: "success"
        });

        // Reinicia los campos después de agregar el producto
        setNombre('');
        setDescripcion('');
        setImagen('');
    };

    return (
        <div>
            <div className='Form'>
                <br /><br />
                <h2>Agregar un nuevo Producto</h2>
                <br />
                <div>
                    <label htmlFor="Nombre">Nombre del Articulo</label>
                    <br />
                    <input
                        type="text"
                        id="Nombre"
                        name="Nombre"
                        placeholder="                       Nombre"
                        className='InputProductos'
                        value={Nombre}
                        onChange={CargaNombre} // Asigna la función para manejar cambios
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
                        placeholder="           Ingrese una Descripcion"
                        className='InputProductos'
                        value={Descripcion}
                        onChange={CargaDescripcion} // Asigna la función para manejar cambios
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
                        onChange={CargaImagen} // Asigna la función para manejar la carga de imágenes
                        required
                        className='inputImg'
                    />
                </div>
                <br />
                <div>
                <div id="ninth" className="buttonBox">
      <button className='BotonLogin'  onClick={Cargar}>Agregar</button>
      </div> {/* Botón para agregar un nuevo producto */}
                </div>
                <br /><br />
            </div>
            <br /><br /> <br /> <br />
            <div className='ContenedorServicios'>
                <h1>Productos</h1>
                <div className='ImagenesServices'> 
                    {Productos.length > 0 ? (
                        Productos.map((producto) => ( // Mapea cada producto para mostrarlo
                            <div key={producto.id}>
                                <h2>{producto.Nombre}</h2>  
                                <img src={producto.Imagen} alt={producto.Nombre} /> 
                                <p>{producto.Descripcion}</p>
                            </div>
                        ))
                    ) : (
                        <p>No hay Productos Disponibles</p> // Mensaje si no hay productos
                    )}
                </div>
            </div>
        </div>
    ); // Cierre de la función FormProductos
}

export default FormProductos; // Exporta el componente
