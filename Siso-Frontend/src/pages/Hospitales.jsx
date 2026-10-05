import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Button, Badge, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hospitales = () => {
  const [cargando, setCargando] = useState(true);
  const [enZona, setEnZona] = useState(false);
  const [ubicacionError, setUbicacionError] = useState(false);

  // Lista mock de hospitales públicos de Tucumán
  const hospitalesTucuman = [
    {
      id: 1,
      nombre: 'Hospital Ángel C. Padilla',
      direccion: 'Alberdi 550, San Miguel de Tucumán',
      telefono: '0381 424-8000',
      especialidad: 'Traumatología y Urgencias Mayor',
      coordenadas: '-26.8368, -65.2072'
    },
    {
      id: 2,
      nombre: 'Hospital Centro de Salud Zenón J. Santillán',
      direccion: 'Av. Avellaneda 750, San Miguel de Tucumán',
      telefono: '0381 431-1200',
      especialidad: 'Infectología y Guardia General',
      coordenadas: '-26.8225, -65.1950'
    },
    {
      id: 3,
      nombre: 'Hospital del Niño Jesús',
      direccion: 'Hungría 750, San Miguel de Tucumán',
      telefono: '0381 452-5000',
      especialidad: 'Pediatría y Emergencias Infantiles',
      coordenadas: '-26.8389, -65.2011'
    },
    {
      id: 4,
      nombre: 'Hospital Regional de Concepción',
      direccion: 'San Martín 1550, Concepción',
      telefono: '03865 42-1000',
      especialidad: 'Atención General e Intensiva Sur',
      coordenadas: '-27.3458, -65.5925'
    }
  ];

  const verificarUbicacion = () => {
    setCargando(true);
    setUbicacionError(false);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Rango geográfico aproximado para la provincia de Tucumán
          const tucumanLatMin = -28.0;
          const tucumanLatMax = -26.0;
          const tucumanLonMin = -66.2;
          const tucumanLonMax = -64.8;

          if (
            lat >= tucumanLatMin &&
            lat <= tucumanLatMax &&
            lon >= tucumanLonMin &&
            lon <= tucumanLonMax
          ) {
            setEnZona(true);
          } else {
            setEnZona(false);
          }
          setCargando(false);
        },
        () => {
          setUbicacionError(true);
          setEnZona(false);
          setCargando(false);
        }
      );
    } else {
      setUbicacionError(true);
      setEnZona(false);
      setCargando(false);
    }
  };

  useEffect(() => {
    verificarUbicacion();
  }, []);

  return (
    <>
      <Container className="py-4">
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="text-warning fw-bold mb-1">
              <i className="fa-solid fa-hospital-user me-2"></i>
              Hospitales Públicos y Centros de Emergencia
            </h2>
            <p className="text-light mb-0">
              Ubicación en tiempo real de los centros de salud asistenciales según el dispositivo.
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Link to="/" className="btn btn-outline-light">
              <i className="fa-solid fa-arrow-left me-2"></i>
              Volver al Panel
            </Link>
          </Col>
        </Row>

        {cargando ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="warning" className="mb-3" />
            <h5 className="text-light">Detectando ubicación del dispositivo...</h5>
          </div>
        ) : enZona ? (
          <Row className="g-4">
            {hospitalesTucuman.map((hosp) => (
              <Col md={6} key={hosp.id}>
                <Card className="bg-dark text-white border-secondary h-100 shadow-sm">
                  <Card.Header className="bg-secondary bg-opacity-25 border-secondary d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-warning">{hosp.nombre}</span>
                    <Badge bg="danger">Guardia 24hs</Badge>
                  </Card.Header>
                  <Card.Body>
                    <p className="mb-2">
                      <i className="fa-solid fa-location-dot text-danger me-2"></i>
                      <strong>Dirección:</strong> {hosp.direccion}
                    </p>
                    <p className="mb-2">
                      <i className="fa-solid fa-phone text-success me-2"></i>
                      <strong>Teléfono:</strong> {hosp.telefono}
                    </p>
                    <p className="mb-3">
                      <i className="fa-solid fa-stethoscope text-info me-2"></i>
                      <strong>Especialidad:</strong> {hosp.especialidad}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        hosp.nombre + ' ' + hosp.direccion
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-warning btn-sm w-100"
                    >
                      <i className="fa-solid fa-map-location-dot me-2"></i>
                      Ver en Google Maps
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Alert variant="warning" className="text-center py-4 my-3 shadow-sm">
            <Alert.Heading className="fw-bold">
              <i className="fa-solid fa-triangle-exclamation me-2"></i>
              Sin Centros de Salud Cercanos
            </Alert.Heading>
            <p className="mb-3">
              {ubicacionError
                ? 'No se pudo acceder a la geolocalización del dispositivo o el permiso fue denegado.'
                : 'No se encuentran hospitales públicos cercanos en la zona de cobertura del sistema.'}
            </p>
            <Button variant="warning" className="fw-bold" onClick={verificarUbicacion}>
              <i className="fa-solid fa-rotate-right me-2"></i>
              Intentar otra vez
            </Button>
          </Alert>
        )}
      </Container>
    </>
  );
};

export default Hospitales;