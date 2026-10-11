import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Terremotos = () => {
  const navigate = useNavigate();

  const [registrosHistoricos, setRegistrosHistoricos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const obtenerTerremotos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);

      const datosFormateados = (response.data.features || []).map((sismo, index) => {
        const mag = sismo.properties.mag || 0;
        return {
          id: index + 1,
          fecha: new Date(sismo.properties.time).toLocaleString(),
          estacion: sismo.properties.place || 'Ubicación no especificada',
          magnitud: mag ? mag.toFixed(1) : 'N/A',
          profundidad: sismo.geometry.coordinates[2] ? `${sismo.geometry.coordinates[2]} km` : 'N/A',
          alerta: mag >= 4.5
        };
      });

      setRegistrosHistoricos(datosFormateados);
    } catch (error) {
      console.error('Error al consultar la API pública:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error de Conexión',
        text: 'No se pudieron obtener los registros de la red sísmica.',
        confirmButtonColor: '#ffc107',
        background: '#212529',
        color: '#fff'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerTerremotos();
  }, []);

  return (
    <>
      <Container className="py-4 text-white">
        <Row className="mb-4 align-items-center">
          <Col md={8}>
            <h2 className="fw-bold text-warning">
              <i className="fa-solid fa-house-chimney-crack me-2"></i>
              Historial de Terremotos Registrados
            </h2>
            <p className="text-secondary mb-0">
              Registro de eventos telúricos detectados por la red de estaciones sismológicas de la provincia.
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button variant="outline-light" onClick={() => navigate('/')}>
              <i className="fa-solid fa-arrow-left me-2"></i>Volver al Panel
            </Button>
          </Col>
        </Row>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="warning" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="text-secondary mt-3 fw-semibold">Consultando API de detección sísmica...</p>
          </div>
        ) : (
          <Row>
            <Col>
              <Card className="bg-dark text-white border-secondary shadow">
                <Card.Body className="p-0">
                  <Table responsive hover variant="dark" className="mb-0 align-middle text-center">
                    <thead>
                      <tr className="border-secondary text-warning">
                        <th>#</th>
                        <th>Fecha y Hora</th>
                        <th>Estación Sismológica</th>
                        <th>Magnitud (Richter)</th>
                        <th>Profundidad</th>
                        <th>Nivel de Alerta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrosHistoricos.length > 0 ? (
                        registrosHistoricos.map((reg) => (
                          <tr key={reg.id} className="border-secondary">
                            <td>{reg.id}</td>
                            <td>{reg.fecha}</td>
                            <td>{reg.estacion}</td>
                            <td className="fw-bold">{reg.magnitud}</td>
                            <td>{reg.profundidad}</td>
                            <td>
                              {reg.alerta ? (
                                <Badge bg="danger">ALERTA ROJA</Badge>
                              ) : (
                                <Badge bg="success">Normal</Badge>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center text-secondary py-4">
                            No se encontraron registros sísmicos disponibles.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Terremotos;