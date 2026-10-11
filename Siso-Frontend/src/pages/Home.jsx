import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [ultimoSismo, setUltimoSismo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const obtenerUltimoSismo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        const eventos = response.data.features;

        if (eventos && eventos.length > 0) {
          const eventoReciente = eventos[0];
          const properties = eventoReciente.properties;
          const geometry = eventoReciente.geometry;

          setUltimoSismo({
            ubicacion: properties.place || 'Ubicación no especificada',
            magnitud: properties.mag ? properties.mag.toFixed(1) : '0.0',
            profundidad: geometry.coordinates[2] ? `${geometry.coordinates[2]} km` : 'N/A',
            hora: new Date(properties.time).toLocaleTimeString(),
            fecha: new Date(properties.time).toLocaleDateString(),
            magValue: properties.mag || 0
          });
        }
      } catch (error) {
        console.error('Error al conectar con la red sísmica:', error);
      } finally {
        setLoading(false);
      }
    };

    if (API_URL) {
      obtenerUltimoSismo();
    }
  }, [API_URL]);

  const getEstadoAlerta = (mag) => {
    if (mag >= 5.5) {
      return {
        titulo: '"RIESGO"',
        subtitulo: 'ALERTA DE SISMO',
        bgClass: 'bg-danger text-white'
      };
    } else if (mag >= 4.0) {
      return {
        titulo: '"PRECAUCIÓN"',
        subtitulo: 'SISMICIDAD MODERADA',
        bgClass: 'bg-warning text-dark'
      };
    } else {
      return {
        titulo: 'SISTEMA EN MONITOREO',
        subtitulo: 'Estaciones sismológicas operando con normalidad',
        bgClass: 'bg-success text-white'
      };
    }
  };

  const estado = ultimoSismo ? getEstadoAlerta(ultimoSismo.magValue) : {};

  return (
    <Container className="py-4 text-center">
      <h1 className="fw-bold text-white mb-1">Sistema de Detección Sísmica Temprana (SDST)</h1>
      <p className="text-secondary mb-4">Panel de control y monitoreo en tiempo real - Tucumán, Argentina</p>

      <Row className="align-items-center g-4">
        {/* Columna Izquierda */}
        <Col lg={3} md={4} className="d-flex flex-column gap-3">
          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/terremotos')}
          >
            <i className="fa-solid fa-house-chimney-crack fs-5"></i>
            Terremotos Registrados
          </Button>

          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/hospitales')}
          >
            <i className="fa-solid fa-hospital fs-5"></i>
            Hospitales Públicos
          </Button>

          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/emergencias')}
          >
            <i className="fa-solid fa-phone-volume fs-5"></i>
            Teléfonos de Emergencia
          </Button>
        </Col>

        {/* Tarjeta Central (Conectada a la API) */}
        <Col lg={6} md={4}>
          {loading ? (
            <div className="py-5">
              <Spinner animation="border" variant="warning" role="status" style={{ width: '3rem', height: '3rem' }} />
              <p className="text-secondary mt-3">Conectando con la red sísmica en vivo...</p>
            </div>
          ) : ultimoSismo ? (
            <Card className={`shadow-lg border-0 rounded-4 ${estado.bgClass}`}>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div className="bg-light rounded-circle d-inline-block p-3 mb-2 opacity-75">
                    <div className="bg-success rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                  </div>
                </div>

                <h2 className="fw-bold mb-1">{estado.titulo}</h2>
                <p className="small mb-4 opacity-75">{estado.subtitulo}</p>

                <div className="bg-black bg-opacity-25 rounded-3 p-3 text-start small">
                  <p className="mb-2">
                    📍 <strong>Última Detección:</strong> {ultimoSismo.ubicacion}
                  </p>
                  <p className="mb-2">
                    📊 <strong>Magnitud:</strong> {ultimoSismo.magnitud} Richter
                  </p>
                  <p className="mb-2">
                    🌊 <strong>Profundidad:</strong> {ultimoSismo.profundidad}
                  </p>
                  <p className="mb-0">
                    ⏰ <strong>Hora:</strong> {ultimoSismo.hora} ({ultimoSismo.fecha})
                  </p>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <p className="text-secondary">Sin reportes recientes.</p>
          )}
        </Col>

        {/* Columna Derecha */}
        <Col lg={3} md={4} className="d-flex flex-column gap-3">
          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/como-actuar')}
          >
            <i className="fa-solid fa-shield-halved fs-5"></i>
            Cómo Actuar
          </Button>

          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/como-funciona')}
          >
            <i className="fa-solid fa-gear fs-5"></i>
            Cómo Funciona la App
          </Button>

          <Button 
            variant="warning" 
            className="fw-bold py-3 text-dark rounded-3 shadow d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate('/tipos-sismos')}
          >
            <i className="fa-solid fa-wave-square fs-5"></i>
            Tipos de Sismos y Ondas P
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;