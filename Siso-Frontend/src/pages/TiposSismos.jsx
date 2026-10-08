import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const TiposSismos = () => {
const navigate = useNavigate();
return (
<Container className="py-4 text-white">
{/* Header y Boton Volver */}
<Row className="mb-4 align-items-center">
<Col md={8}>
<h2 className="fw-bold text-warning d-flex align-items-center gap-2">
<i className="fa-solid fa-earth-americas text-warning"></i>
TIPOS DE SISMOS Y ONDAS P
</h2>
<p className="text-secondary mb-0">
Los sismos son movimientos de la corteza terrestre producidos por la liberación de energía acumulada en el interior de la Tierra.
</p>
</Col>
<Col md={4} className="text-md-end mt-3 mt-md-0">
<Button variant="outline-light" onClick={() => navigate('/')} className="fw-bold">
<i className="fa-solid fa-arrow-left me-2"></i>Volver al Panel
</Button>
</Col>
</Row>
{/* Seccion 1: Tipos de Sismos */}
<h4 className="fw-bold text-info mb-3 d-flex align-items-center gap-2">
<i className="fa-solid fa-layer-group"></i> Tipos de Sismos
</h4>
<Row className="g-4 mb-5">
{/* Sismos Tectonicos */}
<Col md={4}>
<Card className="bg-dark text-white border-warning shadow h-100">
<Card.Header className="bg-warning text-dark fw-bold fs-6 d-flex align-items-center gap-2">
<i className="fa-solid fa-mountain me-1"></i>
Sismos Tectónicos
</Card.Header>
<Card.Body>
<Card.Text className="text-light">
Se producen por el movimiento y desplazamiento de las placas tectónicas. Son los más comunes y pueden generar movimientos importantes.
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Sismos Volcanicos */}
<Col md={4}>
<Card className="bg-dark text-white border-danger shadow h-100">
<Card.Header className="bg-danger text-white fw-bold fs-6 d-flex align-items-center gap-2">
<i className="fa-solid fa-volcano me-1"></i>
Sismos Volcánicos
</Card.Header>
<Card.Body>
<Card.Text className="text-light">
Están relacionados con la actividad de los volcanes y el movimiento del magma dentro de la Tierra.
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Sismos Inducidos */}
<Col md={4}>
<Card className="bg-dark text-white border-info shadow h-100">
<Card.Header className="bg-info text-dark fw-bold fs-6 d-flex align-items-center gap-2">
<i className="fa-solid fa-industry me-1"></i>
Sismos Inducidos
</Card.Header>
<Card.Body>
<Card.Text className="text-light">
Son aquellos relacionados con determinadas actividades realizadas por el ser humano que pueden provocar modificaciones en las condiciones del subsuelo.
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>
{/* Seccion 2: Ondas Sismicas */}
<h4 className="fw-bold text-info mb-3 d-flex align-items-center gap-2">
<i className="fa-solid fa-wave-square"></i> Ondas Sísmicas
</h4>
<p className="text-secondary mb-4">
Cuando ocurre un sismo, la energía se propaga mediante ondas sísmicas.
</p>
<Row className="g-4 mb-4">
{/* Ondas P - Primarias */}
<Col md={12}>
<Card className="bg-dark text-white border-success shadow">
<Card.Header className="bg-success text-white fw-bold fs-5 d-flex align-items-center gap-2">
<i className="fa-solid fa-bolt me-1"></i>
Ondas P — Primarias
</Card.Header>
<Card.Body>
<ListGroup variant="flush" className="bg-transparent mb-3">
<ListGroup.Item className="bg-transparent text-light border-secondary px-0">
<i className="fa-solid fa-circle-check text-success me-2"></i>
Son las primeras ondas en llegar porque son las más rápidas.
</ListGroup.Item>
<ListGroup.Item className="bg-transparent text-light border-0 px-0">
<i className="fa-solid fa-circle-check text-success me-2"></i>
Se pueden propagar a través de materiales sólidos y líquidos.
</ListGroup.Item>
</ListGroup>
{/* Destacado SDST */}
<Card className="bg-black bg-opacity-50 border-warning p-3">
<div className="d-flex align-items-start gap-3">
<Badge bg="warning" text="dark" className="p-2 fs-5 rounded-circle">
<i className="fa-solid fa-lightbulb"></i>
</Badge>
<div>
<h6 className="fw-bold text-warning mb-1">¿POR QUÉ SON IMPORTANTES PARA SDST?</h6>
<p className="mb-0 text-light small">
La detección temprana de las primeras señales de un evento sísmico puede permitir generar una alerta antes de que lleguen ondas posteriores de mayor impacto.
</p>
</div>
</div>
</Card>
</Card.Body>
</Card>
</Col>
{/* Ondas S - Secundarias */}
<Col md={6}>
<Card className="bg-dark text-white border-primary shadow h-100">
<Card.Header className="bg-primary text-white fw-bold fs-6 d-flex align-items-center gap-2">
<i className="fa-solid fa-water me-1"></i>
Ondas S — Secundarias
</Card.Header>
<Card.Body>
<ListGroup variant="flush" className="bg-transparent">
<ListGroup.Item className="bg-transparent text-light border-secondary px-0">
<i className="fa-solid fa-circle-info text-primary me-2"></i>
Son más lentas que las ondas P y producen movimientos diferentes en el terreno.
</ListGroup.Item>
<ListGroup.Item className="bg-transparent text-light border-0 px-0">
<i className="fa-solid fa-circle-info text-primary me-2"></i>
Se propagan principalmente a través de materiales sólidos.
</ListGroup.Item>
</ListGroup>
</Card.Body>
</Card>
</Col>
{/* Ondas Superficiales */}
<Col md={6}>
<Card className="bg-dark text-white border-warning shadow h-100">
<Card.Header className="bg-warning text-dark fw-bold fs-6 d-flex align-items-center gap-2">
<i className="fa-solid fa-house-crack me-1"></i>
Ondas Superficiales
</Card.Header>
<Card.Body>
<ListGroup variant="flush" className="bg-transparent">
<ListGroup.Item className="bg-transparent text-light border-0 px-0">
<i className="fa-solid fa-circle-info text-warning me-2"></i>
Se desplazan por la superficie terrestre y pueden producir movimientos importantes durante un terremoto.
</ListGroup.Item>
</ListGroup>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
);
};
export default TiposSismos;