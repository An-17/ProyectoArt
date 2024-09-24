// TERMINADO 

import { useEffect, useState } from 'react';
import GetUsers from '../Services/GetUsers';
import PostUsers from '../Services/PostUsers'
import Swal from 'sweetalert2'
import '../Style/Register.css'

function FormRegister() {



  const [Username, setUsername] = useState('');
  const [ Correo,  setCorreo ]  = useState('')
  const [Password, setPassword] = useState('');
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const UsersData = await GetUsers();
     
      
      setUsers(UsersData);
 
    };
    fetchUsers();
  }, []);

  function  CargaUsuario(event) {
    setUsername(event.target.value);
  }

  function  CargaCorreo(event) {
    setCorreo(event.target.value);
  }

  const CargaContra = (event) => {
    setPassword(event.target.value);
  };


  const Cargar = ()  => {


    if (Username.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
      });
     
  
   } if (Correo.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
    });
     
   } if (Password.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
    });

      
   }if (Username.trim() && Correo.trim() && Password.trim()) {
    PostUsers(Username, Correo, Password) 
    
    Swal.fire({
      title: "Muy bien!",
      text: "Usuario Registrado!",
      icon: "success"
    });
  }};


  return (
    <div>  
<br /><br /><br /><br />
<div className='ContainerRegister' >
    <div className='FormularioRegister' > 
      <br /><br />
     <h2>Registrar un nuevo Administrador</h2>
        <label htmlFor="Username">Nombre</label>
        <br />
        <input
          type="text"
          id="Username"
          name="Username"
          placeholder="      Ingrese su Nombre"
          value={Username}
          onChange={CargaUsuario}
          required
          className='InputRegister'
        />



<br />
        <label htmlFor="Correo">Correo</label>
        <br />
        <input
          type="email"  id="Correo"  name="Correo"  placeholder="     Ingrese su Correo"
          value={Correo}
          onChange={CargaCorreo}
          required
           className='InputRegister'
        />


      
<br />
         <label htmlFor="Password">Contraseña</label>
         <br />
         <input type="Password" id="Password"  name="Password" placeholder="    Ingrese su contraseña"
          value={Password}
          onChange={CargaContra}
          required
           className='InputRegister'
          />

      <br /><br />
      <div id="ninth" className="buttonBox">
      <button className='BotonLogin'  onClick={Cargar}>Registrar</button>
      </div>
      <br /> <br />
</div>
</div>
</div>
  );

} // cierre de la funcion Form register
export default FormRegister;