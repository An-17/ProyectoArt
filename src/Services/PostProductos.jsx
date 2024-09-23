async function PostProductos(Nombre,Descripcion,Imagen) {
    try {
     
        const Productos = { 
           Nombre,
           Descripcion,
           Imagen
        
        };

        const response = await fetch("http://localhost:3001/Productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Productos)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting Productos:', error);
        throw error;
    }
}

export default PostProductos