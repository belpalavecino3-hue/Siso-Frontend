import React from 'react';

const SidebarRight = () => {
  return (
    <div className="d-grid gap-3">
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Cómo Actuar
      </div>
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Cómo Funciona la App
      </div>
      <div className="p-3 bg-warning text-dark rounded shadow-sm fw-bold text-center" style={{ cursor: 'pointer' }}>
        Tipos de Sismos y Ondas P
      </div>
    </div>
  );
};

export default SidebarRight;