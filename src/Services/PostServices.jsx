async function PostServices(Nombre,Descripcion,Imagen) {
    try {
     
        const Datos = { 
           Nombre,
           Descripcion,
           Imagen
        
        };

        const response = await fetch("http://localhost:3001/Services", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Datos)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting Services:', error);
        throw error;
    }
}

export default PostServices