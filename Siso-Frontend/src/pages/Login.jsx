import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const [registeredUser, setRegisteredUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('sdst_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const validatePasswordFormat = (passStr) => {
    const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
    return alphaNumericRegex.test(passStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email.includes('@')) {
      setErrorMessage('Dirección de Correo Inválido');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Dirección de Correo Inválido');
      return;
    }

    if (!validatePasswordFormat(password)) {
      setErrorMessage('La contraseña solo debe contener letras y números.');
      return;
    }

    if (isRegisterMode) {
      if (password !== confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden.');
        return;
      }
      setRegisteredUser({ email, password });
      setSuccessMessage('¡Cuenta registrada con éxito! Ya puedes iniciar sesión con tu cuenta.');
      setIsRegisterMode(false);
      setPassword('');
      setConfirmPassword('');
    } else {
      if (!registeredUser) {
        setErrorMessage('Correo inexistente');
        return;
      }

      if (email === registeredUser.email && password === registeredUser.password) {
        const userObj = { email };
        setCurrentUser(userObj);
        localStorage.setItem('sdst_user', JSON.stringify(userObj));
      } else {
        setErrorMessage('Correo o contraseña incorrectos.');
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('sdst_user');
    setEmail('');
    setPassword('');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setModalErrorMessage('');

    if (!resetEmail.includes('@') || !validateEmail(resetEmail)) {
      setModalErrorMessage('Dirección de Correo Inválido');
      return;
    }

    if (!validatePasswordFormat(newPassword)) {
      setModalErrorMessage('La contraseña solo debe contener letras y números.');
      return;
    }

    if (registeredUser && resetEmail === registeredUser.email) {
      setRegisteredUser({ ...registeredUser, password: newPassword });
      setResetSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setResetSuccess(false);
        setResetEmail('');
        setNewPassword('');
        setModalErrorMessage('');
        setSuccessMessage('Contraseña actualizada. Puedes iniciar sesión.');
      }, 1500);
    } else {
      setModalErrorMessage('Correo inexistente');
    }
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="bg-dark text-white border-secondary shadow-lg rounded-4 p-4">
            <Card.Body className="p-2">
              <div className="mb-4 text-start">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="fa-solid fa-triangle-exclamation text-warning fs-3"></i>
                  <h2 className="fw-bold text-warning mb-0 fs-3">SDST</h2>
                </div>
              </div>

              {currentUser ? (
                <div className="text-center py-3">
                  <div className="mb-3">
                    <i className="fa-solid fa-circle-user text-warning fs-1 mb-2"></i>
                    <h5 className="fw-bold mb-1">Sesión Iniciada</h5>
                    <p className="text-secondary small mb-3">{currentUser.email}</p>
                  </div>
                  <div className="d-grid gap-2">
                    <Button
                      variant="warning"
                      onClick={() => navigate('/')}
                      className="fw-bold py-2 text-dark rounded-3"
                    >
                      Ir al Panel Principal
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={handleLogout}
                      className="fw-bold py-2 rounded-3 mt-2"
                    >
                      Cerrar Sesión
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h4 className="fw-bold mb-3 text-start">
                    {isRegisterMode ? 'Crear Cuenta' : 'Iniciar Sesión'}
                  </h4>

                  {errorMessage && (
                    <div className="alert alert-danger py-2 small d-flex flex-column gap-1 mb-3" role="alert">
                      <span>{errorMessage}</span>
                      {!registeredUser && !isRegisterMode && (
                        <button
                          type="button"
                          onClick={toggleMode}
                          className="btn btn-link text-danger fw-bold text-decoration-underline p-0 text-start small"
                        >
                          Ir a registrarme
                        </button>
                      )}
                    </div>
                  )}

                  {successMessage && (
                    <div className="alert alert-success py-2 small mb-3" role="alert">
                      {successMessage}
                    </div>
                  )}

                  <Form onSubmit={handleSubmit} noValidate className="text-start">
                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Correo electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black bg-opacity-50 text-white border-secondary py-2 px-3 rounded-3"
                        autoComplete='email'
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Contraseña</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Solo letras y números"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-black bg-opacity-50 text-white border-secondary py-2 px-3 rounded-start-3 border-end-0"
                          autoComplete='current-password'
                        />
                        <Button
                          type="button"
                          variant="outline-secondary"
                          className="border-start-0 border-secondary text-secondary bg-black bg-opacity-50"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i className={'fa-solid ' + (showPassword ? 'fa-eye-slash' : 'fa-eye')}></i>
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    {isRegisterMode && (
                      <Form.Group className="mb-3">
                        <Form.Label className="small text-secondary fw-semibold">Confirmar Contraseña</Form.Label>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Repite la contraseña"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="bg-black bg-opacity-50 text-white border-secondary py-2 px-3 rounded-3"
                          autoComplete='current-password'
                        />
                      </Form.Group>
                    )}

                    {!isRegisterMode && (
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <Form.Check
                          type="checkbox"
                          id="keep-logged-in"
                          label="Mantener sesión iniciada"
                          checked={keepLoggedIn}
                          onChange={(e) => setKeepLoggedIn(e.target.checked)}
                          className="small text-secondary"
                        />
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="warning"
                      className="w-100 fw-bold py-2 text-dark rounded-3 shadow-sm mb-3 text-uppercase"
                    >
                      {isRegisterMode ? 'Registrarme' : 'Iniciar sesión ahora'}
                    </Button>

                    {!isRegisterMode && (
                      <div className="text-end mb-3">
                        <button
                          type="button"
                          onClick={() => {
                            setModalErrorMessage('');
                            setShowModal(true);
                          }}
                          className="btn btn-link text-warning text-decoration-none small p-0 border-0"
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>
                    )}
                  </Form>

                  <div className="text-center mt-3 pt-3 border-top border-secondary">
                    <p className="text-secondary small mb-0">
                      {isRegisterMode ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="btn btn-link text-warning fw-bold text-decoration-none small p-0 ms-2"
                      >
                        {isRegisterMode ? 'Inicia Sesión' : 'Regístrate aquí'}
                      </button>
                    </p>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="text-white">
        <Modal.Header closeButton className="bg-dark border-secondary text-white">
          <Modal.Title className="fs-5 fw-bold text-warning">Restablecer Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          {resetSuccess ? (
            <div className="alert alert-success text-center mb-0" role="alert">
              ¡Contraseña cambiada con éxito!
            </div>
          ) : (
            <Form onSubmit={handleResetPassword} noValidate>
              <p className="small text-secondary mb-3">
                Ingresa tu correo y escribe una nueva contraseña (solo letras y números).
              </p>

              {modalErrorMessage && (
                <div className="alert alert-danger py-2 small mb-3" role="alert">
                  {modalErrorMessage}
                </div>
              )}

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="bg-black text-white border-secondary"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-black text-white border-secondary"
                />
              </Form.Group>
              <Button type="submit" variant="warning" className="w-100 fw-bold text-dark">
                Guardar nueva contraseña
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;