import '../Style/Login.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/EstiloNav.css'
import Logo from '../img/Logo.jpeg'
import React from 'react';
import {Link} from "react-router-dom";

function NavbarHome() {
  return (
    <>
      {[false,  ].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container fluid>
          <Navbar.Brand>
            <img
              src= {Logo}
              width="100"
              height="100"
              className="Logo"
            />
            </Navbar.Brand>
            <Navbar.Brand ><h3>Art Barber Shop</h3></Navbar.Brand>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Art Barber Shop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="Letras">

                  <Nav className='opciones' ><Link to= "/"> Home</Link></Nav>
                  <br />
                  <Nav className='opciones' ><Link to= "/Contactanos"> Contactanos</Link></Nav>
                  <br />
                  <Nav className='opciones' ><Link to= "/Reservar">Reservar</Link> </Nav>
                  <br />
                  <Nav><Link to= "/TiendaOnline">Tienda online</Link></Nav>
                  <br />
                  <Nav className='opciones'><Link to= "/Servicios">Servicios</Link></Nav>
                  <br />
                  <Nav  ><Link to= "/Login">Iniciar Sesión</Link></Nav>
            
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  
  );
}

export default NavbarHome;
