import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SidebarLeft = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack gap={3} className="w-100">
        <Button
          variant="warning"
          size="lg"
          className="fw-bold py-3 text-dark shadow-sm"
          onClick={() => navigate('/terremotos')}
        >
          <i className="fa-solid fa-house-chimney-crack me-2"></i>
          Terremotos Registrados
        </Button>

        <Button
          variant="warning"
          size="lg"
          className="fw-bold py-3 text-dark shadow-sm"
          onClick={() => navigate('/hospitales')}
        >
          <i className="fa-solid fa-hospital-user me-2"></i>
          Hospitales Públicos
        </Button>

        <Button
          variant="warning"
          size="lg"
          className="fw-bold py-3 text-dark shadow-sm"
          onClick={() => navigate('/emergencias')}
        >
          <i className="fa-solid fa-phone-volume me-2"></i>
          Teléfonos de Emergencia
        </Button>
      </Stack>
    </>
  );
};

export default SidebarLeft;