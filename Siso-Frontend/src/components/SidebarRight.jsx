import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SidebarRight = () => {
const navigate = useNavigate();
return (
<>
<Stack gap={3} className="w-100">
<Button
variant="warning"
size="lg"
className="fw-bold py-3 text-dark shadow-sm"
onClick={() => navigate('/como-actuar')}
>
<i className="fa-solid fa-shield-halved me-2"></i>
Cómo Actuar
</Button>
<Button
variant="warning"
size="lg"
className="fw-bold py-3 text-dark shadow-sm"
onClick={() => navigate('/como-funciona')}
>
<i className="fa-solid fa-gears me-2"></i>
Cómo Funciona la App
</Button>
<Button
variant="warning"
size="lg"
className="fw-bold py-3 text-dark shadow-sm"
onClick={() => navigate('/tipos-sismos')}
>
<i className="fa-solid fa-wave-square me-2"></i>
Tipos de Sismos y Ondas P
</Button>
</Stack>
</>
);
};
export default SidebarRight;