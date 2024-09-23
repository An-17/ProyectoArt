async function GetUsers() {
    try {
        const response = await fetch('http://localhost:3001/Users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Users');
        }

        const UsersData = await response.json();
        return UsersData;
    } catch (error) {
        console.error('Error fetching Users:', error);
        throw error;
    }
}

export default  GetUsers ;