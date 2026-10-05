import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Hospitales from '../../pages/Hospitales';
import Terremotos from '../../pages/Terremotos';
import Error404 from '../../pages/Error404';
import Emergenias from '../../pages/Emergenias';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hospitales" element={<Hospitales />} />
      <Route path="/terremotos" element={<Terremotos />} />
      <Route path="/emergencias" element={<Emergenias />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Rutas;