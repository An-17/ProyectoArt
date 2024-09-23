import { useEffect, useState } from 'react';
import React from 'react'
import GetUsers from '../Services/GetUsers';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



function FormLogin ()  { 
  const [Username, setUsername] = useState('');
  const [Correo, setCorreo]     = useState('')
  const [Password, setPassword] = useState('');
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate ();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
     
      
      setUsers(data);
 
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
    const ValidUsers = Users.find (Users => Users.Correo === Correo && Users.Password == Password) 





 if (Username.trim() === "") {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Este Nombre no es valido!",
  });
     
  
   } if (Correo.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: " Este Correo no es valido!",
      });
     
   } if (Password.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Esta contraseña no es valida!",
      
    });
 

  }if (ValidUsers) { 
    localStorage.setItem("Autenticado", 'true')
    navigate('/HomeAdmi')
    Swal.fire({
      title: "Muy bien!",
      text: "Iniciaste Sesión!",
      icon: "success"
  
    });
    
    
  }if (!ValidUsers) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Este Usuario no se encuentra!",
    });

    

    
  }
    
  };
  


  return (
    <div>

    

      <br /><br /><br /><br />
<div className='ContainerLogin' >
<div className='FormularioLogin' >
  <br />
      <h2>Iniciar Sesion</h2>
      <div>
        <label htmlFor="Username">Nombre</label>
        <br />
        <input
          type="text"
          id="Username"
          name="Username"
          placeholder="     Ingrese su Nombre"
          value={Username}
          onChange={CargaUsuario}
          required
          className='InputLogin'
        />
      </div>

     <div>
      <label htmlFor="Correo">Correo</label>
        <br />
        <input
          type="text"  id="Correo"  name="Correo"  placeholder="     Ingrese su Correo"
          value={Correo}
          onChange={CargaCorreo}
          required
          className='InputLogin'
        />
      </div>
      
      <div>
        <label htmlFor="Password">Contraseña</label>
        <br />
      <input type="Password" id="Password"  name="Password" placeholder="     Ingrese su contraseña"
          value={Password}
          onChange={CargaContra}
          required
          className='InputLogin'
        />
        <br /><br />
      </div>
      <div id="ninth" className="buttonBox">
      <button className='BotonLogin'  onClick={Cargar}>Iniciar Sesion</button>
      </div>
     
      <br /><br />
    </div>
    </div>
    </div>
      
  );
  }

export default FormLogin



 