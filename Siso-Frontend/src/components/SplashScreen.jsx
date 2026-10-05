import React from 'react';
import { Spinner } from 'react-bootstrap';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="text-center mb-4">
        <h1 className="text-warning display-1 fw-bold mb-1">SDST</h1>
        <p className="text-light text-uppercase tracking-widest small m-0">
          Sistema de Detección Sísmica Temprana
        </p>
      </div>
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default SplashScreen;