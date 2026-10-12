import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Hospitales from '../../pages/Hospitales';
import Terremotos from '../../pages/Terremotos';
import Error404 from '../../pages/Error404';
import Emergencias from '../../pages/Emergencias';
import Login from '../../pages/Login';
import ComoActuar from '../../pages/ComoActuar';
import TiposSismos from '../../pages/TiposSismos';
import ComoFunciona from '../../pages/ComoFunciona';
import Footer from '../Footer';

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hospitales" element={<Hospitales />} />
      <Route path="/terremotos" element={<Terremotos />} />
      <Route path="/emergencias" element={<Emergencias />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/como-actuar" element={<ComoActuar />} />
      <Route path="/tipos-sismos" element={<TiposSismos />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
    </Routes>
     <Footer />
    </>
    
  );
};

export default Rutas;