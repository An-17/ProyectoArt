async function updateServices(nombre, descripcion,id, imagen) {
    try {
     
        const Services = { 
            nombre, 
            descripcion,
            id,
            imagen
        
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

export{updateServices}