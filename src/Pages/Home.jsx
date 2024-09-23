import React from 'react';
import NavbarHome from '../Components/NavbarHome.jsx';
import HomeComponents from '../Components/HomeComponents.jsx';
import FooterHome from '../Components/footerHome.jsx';
import Carrusel from '../Components/Carrusel.jsx';

function Home() {
  return (
    <div>
       <NavbarHome/> 
       <Carrusel/> 
       <HomeComponents/>
       <FooterHome/> 

    </div>
  )
}

export default Home