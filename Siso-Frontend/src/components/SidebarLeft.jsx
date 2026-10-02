import React from 'react';

const SidebarLeft = () => {
  return (
    <div className="d-grid gap-3">
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Terremotos Registrados
      </div>
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Hospitales Públicos
      </div>
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Teléfonos de Emergencia
      </div>
    </div>
  );
};

export default SidebarLeft;