import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ComoActuar = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-4 text-white">
      <Row className="mb-4 align-items-center">
        <Col md={8}>
          <h2 className="fw-bold text-warning d-flex align-items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation text-danger"></i>
            ¿CÓMO ACTUAR ANTE UN SISMO?
          </h2>
          <p className="text-secondary mb-0">
            Durante un sismo es fundamental mantener la calma y actuar de manera segura para preservar la vida.
          </p>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <Button variant="outline-light" onClick={() => navigate('/')} className="fw-bold">
            <i className="fa-solid fa-arrow-left me-2"></i>Volver al Panel
          </Button>
        </Col>
      </Row>

      
      <Row className="g-4">
        {/* Dentro de un edificio */}
        <Col md={6} lg={4}>
          <Card className="bg-dark text-white border-warning shadow h-100">
            <Card.Header className="bg-warning text-dark fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-building me-1"></i>
              SI ESTÁS DENTRO
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-check text-warning me-2"></i>Mantener la calma.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-check text-warning me-2"></i>Alejarse de ventanas, vidrios y objetos pesados.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-check text-warning me-2"></i>Buscar un lugar seguro y proteger la cabeza.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-xmark text-danger me-2"></i><strong>No utilizar ascensores.</strong>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0 px-0">
                  <i className="fa-solid fa-xmark text-danger me-2"></i>No correr hacia las salidas mientras continúe el movimiento.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* para afuera */}
        <Col md={6} lg={4}>
          <Card className="bg-dark text-white border-success shadow h-100">
            <Card.Header className="bg-success text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-tree me-1"></i>
              SI ESTÁS AFUERA
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-check text-success me-2"></i>Alejarse de edificios, postes, árboles y cables.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-check text-success me-2"></i>Buscar un espacio abierto y seguro.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0 px-0">
                  <i className="fa-solid fa-check text-success me-2"></i>Mantenerse alejado de estructuras que puedan colapsar.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Despues del sismo */}
        <Col md={12} lg={4}>
          <Card className="bg-dark text-white border-info shadow h-100">
            <Card.Header className="bg-info text-dark fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-mobile-screen-button me-1"></i>
              DESPUÉS DEL SISMO
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-circle-info text-info me-2"></i>Mantenerse atento a las indicaciones de las autoridades.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-circle-info text-info me-2"></i>Evitar ingresar a estructuras dañadas.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-secondary px-0">
                  <i className="fa-solid fa-circle-info text-info me-2"></i>Revisar el estado de las personas cercanas.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0 px-0">
                  <i className="fa-solid fa-circle-info text-info me-2"></i>Solicitar ayuda si es necesario.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Nota informativa SDST */}
      <Row className="mt-4">
        <Col>
          <Card className="bg-dark border-danger text-white shadow">
            <Card.Body className="d-flex align-items-center gap-3">
              <Badge bg="danger" className="p-3 fs-4 rounded-circle">
                <i className="fa-solid fa-bell"></i>
              </Badge>
              <div>
                <h5 className="fw-bold text-danger mb-1">Rol del Sistema de Detección (SDST)</h5>
                <p className="mb-0 text-secondary">
                  El sistema <strong>SDST</strong> permite detectar movimientos telúricos tempranos y emitir alertas inmediatas para brindar valiosos segundos de respuesta oportuna ante un evento sísmico.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComoActuar;