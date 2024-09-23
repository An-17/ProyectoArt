async function PostServices(nombre,descripcion,imagen) {
    try {
     
        const datos = { 
           nombre,
           descripcion,
           imagen
        
        };

        const response = await fetch("http://localhost:3001/Services", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting Services:', error);
        throw error;
    }
}

export default PostServices