import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Error404 = () => {
const navigate = useNavigate();
return (
<>
<Container className="py-5 text-center text-white">
<Row className="justify-content-center">
<Col md={8} lg={6}>
<Card className="bg-dark text-white border-danger shadow-lg p-4">
<Card.Body>
<h1 className="display-1 fw-bold text-danger">404</h1>
<h3 className="fw-bold mb-3">Página No Encontrada</h3>
<p className="text-secondary mb-4">
La ruta a la que intentas acceder no existe en el Sistema de Detección Sísmica Temprana.
</p>
<Button variant="warning" className="fw-bold px-4" onClick={() => navigate('/')}>
<i className="fa-solid fa-house me-2"></i>Volver al Inicio
</Button>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
</>
);
};
export default Error404;