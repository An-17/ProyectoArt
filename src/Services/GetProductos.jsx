async function GetProductos() {
    try {
        const response = await fetch('http://localhost:3001/Productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Productos');
        }

        const Productos = await response.json();
        return Productos;
    } catch (error) {
        console.error('Error fetching Productos:', error);
        throw error;
    }
}
export default GetProductos