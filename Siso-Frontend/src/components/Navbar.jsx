import React from 'react';
import { Navbar as BsNavbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary shadow-sm">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fw-bold text-warning">
          SDST - Tucumán
        </BsNavbar.Brand>
        
        <BsNavbar.Text className="ms-auto text-secondary small">
          <i className="fa-solid fa-circle text-success me-1 fs-6"></i>
          Estado: <strong className="text-light">Estaciones Activas</strong>
        </BsNavbar.Text>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;