import React, { useState, useEffect } from 'react';
import Alertapanel from './components/Alertapanel';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SiderbarRight';

function App() {
  const [ultimoSismo, setUltimoSismo] = useState(null);
  const estaciones = [
    "Estación San Miguel de Tucumán", 
    "Estación Tafí del Valle", 
    "Estación Yerba Buena", 
    "Estación Concepción", 
    "Estación Trancas"
  ];

  useEffect(() => {
    // Simulamos un evento sísmico esporádico cada 10 segundos para que no esté cambiando constantemente
    const intervalo = setInterval(() => {
      const magnitud = (Math.random() * (7.0 - 3.0) + 3.0).toFixed(1);
      const profundidad = Math.floor(Math.random() * 50) + 10;
      const estacion = estaciones[Math.floor(Math.random() * estaciones.length)];
      
      setUltimoSismo({
        estacion,
        magnitud: parseFloat(magnitud),
        profundidad,
        fecha: new Date().toLocaleTimeString(),
        alerta: magnitud >= 5.0 // Solo activa la alerta roja si es mayor o igual a 5.0
      });
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

return (
    <div className="bg-dark text-white min-vh-100 py-4 w-100">
      <div className="w-100 px-4">
        {/* Cabecera principal */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2">Sistema de Detección Sísmica Temprana (SDST)</h1>
          <p className="text-secondary">Panel de control y monitoreo en tiempo real - Tucumán, Argentina</p>
        </div>

        {/* Estructura de 3 columnas */}
        <div className="row align-items-center g-4 w-100 m-0">
          <div className="col-lg-3">
            <SidebarLeft />
          </div>

          <div className="col-lg-6">
            <Alertapanel sismo={ultimoSismo} />
          </div>

          <div className="col-lg-3">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;