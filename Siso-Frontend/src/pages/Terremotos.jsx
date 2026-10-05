import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Terremotos = () => {
const navigate = useNavigate();
const registrosHistoricos = [
{ id: 1, fecha: "04/10/2026 - 19:57", estacion: "Estación Yerba Buena", magnitud: 5.0, profundidad: "25 km", alerta: true },
{ id: 2, fecha: "04/10/2026 - 18:30", estacion: "Estación Tafí del Valle", magnitud: 3.8, profundidad: "18 km", alerta: false },
{ id: 3, fecha: "04/10/2026 - 14:15", estacion: "Estación San Miguel de Tucumán", magnitud: 4.2, profundidad: "30 km", alerta: false },
{ id: 4, fecha: "03/10/2026 - 22:10", estacion: "Estación Trancas", magnitud: 5.4, profundidad: "12 km", alerta: true },
{ id: 5, fecha: "03/10/2026 - 11:05", estacion: "Estación Concepción", magnitud: 3.5, profundidad: "40 km", alerta: false }
];
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
{registrosHistoricos.map((reg) => (
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
))}
</tbody>
</Table>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
</>
);
};
export default Terremotos;