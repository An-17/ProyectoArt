async function UpdateServices(Nombre, Descripcion,id, Imagen) {
    try {
     
        const Services = { 
            Nombre, 
            Descripcion,
            id,
            Imagen
        
        };
        const response = await fetch("http://localhost:3001/Services/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Services)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{ UpdateServices }