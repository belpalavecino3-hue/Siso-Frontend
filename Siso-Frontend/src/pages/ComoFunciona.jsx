import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ComoFunciona = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-4 text-white">
      <Row className="mb-4 align-items-center">
        <Col md={8}>
          <h2 className="fw-bold text-warning d-flex align-items-center gap-2">
            <i className="fa-solid fa-gears text-warning"></i>
            ¿CÓMO FUNCIONA LA APP SDST?
          </h2>
          <p className="text-secondary mb-0">
            El Sistema de Detección Sísmica Temprana está diseñado para brindar información oportuna, alertas e instrumentos de prevención.
          </p>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <Button variant="outline-light" onClick={() => navigate('/')} className="fw-bold">
            <i className="fa-solid fa-arrow-left me-2"></i>Volver al Panel
          </Button>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="bg-dark text-white border-warning shadow h-100">
            <Card.Header className="bg-warning text-dark fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-satellite-dish me-1"></i>
              1. Monitoreo y Alertas en Tiempo Real
            </Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              <p className="text-light mb-1">
                • Detecta las primeras vibraciones sísmicas (<strong>Ondas P</strong>) mediante sensores.
              </p>
              <p className="text-light mb-1">
                • Emite notificaciones y alertas preventivas segundos antes de la llegada de las ondas más destructivas.
              </p>
              <p className="text-light mb-0">
                • Muestra en el panel principal la magnitud, epicentro y datos del evento en tiempo real.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="bg-dark text-white border-danger shadow h-100">
            <Card.Header className="bg-danger text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-hospital me-1"></i>
              2. Red de Hospitales y Emergencias
            </Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              <p className="text-light mb-1">
                • Localiza los hospitales y centros de salud más cercanos en la provincia.
              </p>
              <p className="text-light mb-0">
                • Brinda acceso rápido a números de emergencia y contactos directos de asistencia médica y rescate.
              </p>
            </Card.Body>
          </Card>
        </Col>

        
        <Col md={6}>
          <Card className="bg-dark text-white border-success shadow h-100">
            <Card.Header className="bg-success text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-shield-halved me-1"></i>
              3. Guía de Respuesta y Prevención
            </Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              <p className="text-light mb-1">
                • Proporciona instrucciones claras sobre qué hacer antes, durante y después de un sismo.
              </p>
              <p className="text-light mb-0">
                • Incluye recomendaciones específicas para cuando estás dentro de un edificio o en la vía pública.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="bg-dark text-white border-info shadow h-100">
            <Card.Header className="bg-info text-dark fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="fa-solid fa-graduation-cap me-1"></i>
              4. Educación y Conocimiento Sísmico
            </Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              <p className="text-light mb-1">
                • Explica los tipos de sismos y la clasificación de las ondas sísmicas.
              </p>
              <p className="text-light mb-0">
                • Ayuda a entender la importancia de la detección temprana para ponerse a resguardo oportuno.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="bg-dark border-warning text-white shadow">
            <Card.Body className="d-flex align-items-center gap-3">
              <Badge bg="warning" text="dark" className="p-3 fs-4 rounded-circle">
                <i className="fa-solid fa-heart-pulse"></i>
              </Badge>
              <div>
                <h5 className="fw-bold text-warning mb-1">Compromiso SDST</h5>
                <p className="mb-0 text-secondary">
                  SDST combina tecnología de monitoreo con educación preventiva para proteger a la comunidad.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComoFunciona;