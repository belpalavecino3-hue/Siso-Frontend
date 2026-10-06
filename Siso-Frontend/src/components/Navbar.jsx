import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const cargarUsuario = () => {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    setUsuario(usuarioGuardado);
  };

  useEffect(() => {
    cargarUsuario();

  
    window.addEventListener('sesionCambiada', cargarUsuario);

    return () => {
      window.removeEventListener('sesionCambiada', cargarUsuario);
    };
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuarioLogueado');
    setUsuario(null);
    window.dispatchEvent(new Event('sesionCambiada'));
    navigate('/');
  };

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fw-bold text-warning">
          SDST - Tucumán
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
          
            <BsNavbar.Text className="text-secondary small me-3">
              <i className="fa-solid fa-circle text-success me-1 fs-6"></i>
              Estado: <strong className="text-light">Estaciones Activas</strong>
            </BsNavbar.Text>

            
            {usuario ? (
              <NavDropdown
                title={
                  <span className="text-warning fw-bold d-inline-flex align-items-center">
                    <i className="fa-regular fa-circle-user fs-4 me-1"></i>
                    <span>{usuario}</span>
                  </span>
                }
                id="user-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={handleCerrarSesion} className="text-danger fw-bold">
                  <i className="fa-solid fa-right-from-bracket me-2"></i>
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              
              <Nav.Link as={Link} to="/login" className="text-warning p-0 fs-4" title="Iniciar Sesión">
                <i className="fa-regular fa-circle-user fs-3"></i>
              </Nav.Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;