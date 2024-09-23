async function PostUsers(Username,Correo,Password) {
    try {
     
        const UserData = { 
            Username,
            Correo,
            Password
        
        };

        const response = await fetch("http://localhost:3001/Users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting User:', error);
        throw error;
    }
}

export default PostUsers