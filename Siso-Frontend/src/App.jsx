import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Rutas from './components/routes/Rutas';
import SplashScreen from './components/SplashScreen';

function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    
    const timerFade = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    
    const timerRemove = setTimeout(() => {
      setMostrarSplash(false);
    }, 2300);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerRemove);
    };
  }, []);

  return (
    <>
      {mostrarSplash && <SplashScreen fadeOut={fadeOut} />}
      <Navbar />
      <Rutas />
    </>
  );
}

export default App;