import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Alertapanel from '../components/Alertapanel';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
const Home = () => {
const [ultimoSismo, setUltimoSismo] = useState(null);
const estaciones = [
"Estación San Miguel de Tucumán",
"Estación Tafí del Valle",
"Estación Yerba Buena",
"Estación Concepción",
"Estación Trancas"
];
useEffect(() => {
const intervalo = setInterval(() => {
const magnitud = (Math.random() * (7.0 - 3.0) + 3.0).toFixed(1);
const profundidad = Math.floor(Math.random() * 50) + 10;
const estacion = estaciones[Math.floor(Math.random() * estaciones.length)];
setUltimoSismo({
estacion,
magnitud: parseFloat(magnitud),
profundidad,
fecha: new Date().toLocaleTimeString(),
alerta: magnitud >= 5.0
});
}, 10000);
return () => clearInterval(intervalo);
}, []);
return (
<>
<Container fluid className="px-4 py-3">
<Row className="text-center mb-4">
<Col>
<h1 className="fw-bold mb-2 text-white">Sistema de Detección Sísmica Temprana (SDST)</h1>
<p className="text-secondary">Panel de control y monitoreo en tiempo real - Tucumán, Argentina</p>
</Col>
</Row>
<Row className="align-items-center g-4 w-100 m-0">
<Col lg={3}>
<SidebarLeft />
</Col>
<Col lg={6}>
<Alertapanel sismo={ultimoSismo} />
</Col>
<Col lg={3}>
<SidebarRight />
</Col>
</Row>
</Container>
</>
);
};
export default Home;