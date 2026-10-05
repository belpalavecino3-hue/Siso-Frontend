import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Emergencias = () => {
  const telefonosEmergencia = [
    {
      id: 1,
      nombre: 'Emergencias Médicas (107)',
      numero: '107',
      descripcion: 'Atención médica de urgencia y traslado de ambulancias en toda la provincia.',
      icono: 'fa-user-nurse',
      color: 'danger'
    },
    {
      id: 2,
      nombre: 'Defensa Civil Tucumán',
      numero: '103',
      descripcion: 'Asistencia y coordinación ante sismos, catástrofes y emergencias provinciales.',
      icono: 'fa-shield-halved',
      color: 'warning'
    },
    {
      id: 3,
      nombre: 'Policía de la Provincia',
      numero: '911',
      descripcion: 'Central de emergencias y seguridad pública operacional las 24 horas.',
      icono: 'fa-building-shield',
      color: 'primary'
    },
    {
      id: 4,
      nombre: 'Cuerpo de Bomberos',
      numero: '100',
      descripcion: 'Rescate urbano, control de incendios y emergencias edilicias tras eventos sísmicos.',
      icono: 'fa-fire-extinguisher',
      color: 'danger'
    }
  ];

  return (
    <>
      <Container className="py-4">
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="text-warning fw-bold mb-1">
              <i className="fa-solid fa-phone-volume me-2"></i>
              Teléfonos de Emergencia
            </h2>
            <p className="text-light mb-0">
              Líneas gratuitas directas y organismos de asistencia activa en Tucumán.
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Link to="/" className="btn btn-outline-light">
              <i className="fa-solid fa-arrow-left me-2"></i>
              Volver al Panel
            </Link>
          </Col>
        </Row>

        <Row className="g-4">
          {telefonosEmergencia.map((item) => (
            <Col md={6} key={item.id}>
              <Card className="bg-dark text-white border-secondary h-100 shadow-sm">
                <Card.Header className="bg-secondary bg-opacity-25 border-secondary d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-warning">
                    <i className={'fa-solid ' + item.icono + ' me-2 text-' + item.color}></i>
                    {item.nombre}
                  </span>
                  <Badge bg={item.color}>Gratuito</Badge>
                </Card.Header>
                <Card.Body>
                  <h3 className="text-center my-3 fw-bold text-light">
                    <i className="fa-solid fa-phone me-2 text-success"></i>
                    {item.numero}
                  </h3>
                  <p className="text-secondary text-center mb-4">
                    {item.descripcion}
                  </p>
                  <a
                    href={`tel:${item.numero}`}
                    className="btn btn-outline-success w-100 fw-bold"
                  >
                    <i className="fa-solid fa-phone-flip me-2"></i>
                    Llamar
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Emergencias;