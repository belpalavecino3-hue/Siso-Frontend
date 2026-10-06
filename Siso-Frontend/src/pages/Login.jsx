import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [esRegistro, setEsRegistro] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('info');
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (esRegistro) {
      setMensaje('Cree su cuenta para registrarse en el sistema SDST.');
      setTipoMensaje('info');
    } else {
      setMensaje('Bienvenido al portal SDST. Ingrese sus credenciales.');
      setTipoMensaje('info');
    }
  }, [esRegistro]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);

    setTimeout(() => {
      setCargando(false);

      const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosSDST')) || [
        { nombre: 'Admin', email: 'admin@sdst.com', password: '123' }
      ];

      if (esRegistro) {
        const existe = usuariosGuardados.some((u) => u.email.toLowerCase() === email.toLowerCase());

        if (existe) {
          setMensaje('El correo electrónico ya se encuentra registrado.');
          setTipoMensaje('danger');
          return;
        }

        const nuevoUsuario = { nombre, email, password };
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuariosSDST', JSON.stringify(usuariosGuardados));

        setNombre('');
        setPassword('');
        setEsRegistro(false);
        setMensaje('Registrado correctamente. Inicie sesión con sus credenciales.');
        setTipoMensaje('success');
      } else {
        const usuarioEncontrado = usuariosGuardados.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );

        if (usuarioEncontrado) {
          localStorage.setItem('usuarioLogueado', usuarioEncontrado.nombre);
          // Notificar a la Navbar que la sesión cambió
          window.dispatchEvent(new Event('sesionCambiada'));
          navigate('/');
        } else {
          setMensaje('Correo o contraseña inválidos.');
          setTipoMensaje('danger');
        }
      }
    }, 1000);
  };

  return (
    <Container className="my-4">
      <div className="mb-3">
        <Button 
          variant="outline-warning" 
          size="sm"
          className="fw-bold"
          onClick={() => navigate('/')}
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Volver al Inicio
        </Button>
      </div>

      <Row className="w-100 justify-content-center m-0">
        <Col md={6} lg={5}>
          <Card className="bg-dark text-white border-secondary shadow-lg p-3">
            <Card.Body>
              <h3 className="text-center fw-bold text-warning mb-3">
                {esRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}
              </h3>

              {mensaje && <Alert variant={tipoMensaje} className="py-2 small text-center">{mensaje}</Alert>}

              <Form onSubmit={handleSubmit}>
                {esRegistro && (
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingrese su nombre" 
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required 
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="ejemplo@sdst.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup>
                    <Form.Control 
                      type={mostrarPassword ? 'text' : 'password'} 
                      placeholder="****" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                    <Button 
                      variant="outline-secondary" 
                      type="button"
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                      <i className={'fa-solid ' + (mostrarPassword ? 'fa-eye-slash' : 'fa-eye')}></i>
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 fw-bold mb-3" disabled={cargando}>
                  {cargando 
                    ? (esRegistro ? 'Guardando...' : 'Verificando...') 
                    : (esRegistro ? 'Registrarse' : 'Iniciar Sesión')}
                </Button>

                <div className="text-center mt-3 pt-2 border-top border-secondary">
                  <p className="mb-1 small text-secondary">
                    {esRegistro ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta aún?'}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-warning p-0 fw-bold text-decoration-none"
                    onClick={() => {
                      setEsRegistro(!esRegistro);
                      setMensaje('');
                    }}
                  >
                    {esRegistro ? 'Inicia sesión aquí' : 'Regístrate primero'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;