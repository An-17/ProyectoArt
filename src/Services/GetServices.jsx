async function GetServices() {
    try {
        const response = await fetch('http://localhost:3001/Services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Services');
        }

        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error fetching Services:', error);
        throw error;
    }
}
export default GetServices