import React from 'react';

const Alertapanel = ({ sismo }) => {
  const hayAlerta = sismo && sismo.alerta;

  return (
    <div className={`p-5 rounded shadow text-white text-center ${hayAlerta ? 'bg-danger' : 'bg-success'}`}>
      <h1 className="display-4 fw-bold">{hayAlerta ? '"RIESGO"' : '🟢'}</h1>
      <h2 className="fw-bold mb-3">
        {hayAlerta ? 'ALERTA DE SISMO' : 'SISTEMA EN MONITOREO'}
      </h2>
      <p className="text-light mb-4">
        {hayAlerta ? 'Sistema de Alerta Temprana Descentralizada' : 'Estaciones sismológicas operando con normalidad'}
      </p>
      <hr className="bg-white" />
      <div className="mt-3 text-start bg-black bg-opacity-25 p-3 rounded">
        <p className="mb-1"><strong>📍 Última Detección:</strong> {sismo ? sismo.estacion : 'Ninguna registrada'}</p>
        <p className="mb-1"><strong>📊 Magnitud:</strong> {sismo ? `${sismo.magnitud} Richter` : 'Sin registros aún'}</p>
        <p className="mb-1"><strong>🌊 Profundidad:</strong> {sismo ? `${sismo.profundidad} km` : '-'}</p>
        <p className="mb-0"><strong>⏰ Hora:</strong> {sismo ? sismo.fecha : '-'}</p>
      </div>
    </div>
  );
};

export default Alertapanel;