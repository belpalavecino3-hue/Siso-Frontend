# 🌋 SDST - Sistema de Detección Sísmica Temprana | Tucumán

Aplicación web desarrollada en *React* y *React-Bootstrap*, diseñada para el monitoreo en tiempo real de la actividad sísmica global y regional (enfocada en la provincia de Tucumán, Argentina). El sistema provee herramientas de prevención, guías de actuación ante sismos, localización de hospitales públicos cercanos y líneas de emergencia directas.

---

## 🚀 Características Principales

* *Monitoreo en Tiempo Real (Home.jsx / Terremotos.jsx):* Conexión directa mediante Axios con la API pública del Servicio Geológico de los Estados Unidos (USGS) para consultar el historial de sismos recientes y evaluar niveles de alerta según la magnitud (Richter).
* *Guía de Prevención y Actuación (ComoActuar.jsx):* Protocolos detallados de seguridad sobre cómo proceder antes, durante y después de un sismo (en espacios interiores o exteriores).
* *Red de Hospitales Públicos (Hospitales.jsx):* Módulo de geolocalización inteligente que verifica si el usuario se encuentra dentro de Tucumán para listar los centros de salud y guardias disponibles, con enlace directo de búsqueda en Google Maps.
* *Líneas de Emergencia Directas (Emergencias.jsx):* Directorio interactivo de acceso rápido con números gratuitos de asistencia y botón de discado automático (tel:).
* *Tipos de Sismos y Ondas Sísmicas (TiposSismos.jsx / ComoFunciona.jsx):* Sección educativa sobre el origen tectónico, volcánico e inducido de los sismos, destacando el rol fundamental de las *Ondas P (Primarias)* en los sistemas de alerta temprana.
* *Autenticación de Usuarios (Login.jsx):* Sistema simulado de inicio de sesión, registro de cuentas con validación de expresiones regulares (Regex) y recuperación de contraseñas mediante modales.

---

## 🔍 Optimización y SEO

El proyecto incluye una estrategia de *SEO On-Page* integrada directamente en index.html:
* *Metatags Estándar:* Definición de title, description, keywords, author e instrucciones para motores de búsqueda (robots="index, follow").
* *Open Graph (Social SEO):* Configuración de metatags og:title, og:description, og:image, og:url y og:type para garantizar una vista previa atractiva al compartir el enlace en redes sociales y plataformas de mensajería (WhatsApp, Telegram, LinkedIn).
* *Favicon Estándar:* Configuración adaptada sin referencias a librerías predeterminadas para un renderizado óptimo y limpio en navegadores.

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **[React 19](https://react.dev/):** Biblioteca principal para la construcción de interfaces modulares basadas en componentes.
* **[Vite](https://vitejs.dev/):** Entorno de desarrollo y empaquetador de la aplicación.
* **[React Router DOM v7](https://reactrouter.com/):** Gestión de enrutamiento y navegación de la SPA.
* **[Bootstrap 5 & React-Bootstrap](https://react-bootstrap.github.io/):** Estilos responsivos y componentes UI.
* **[Axios](https://axios-http.com/):** Cliente HTTP para el consumo de la API de sismos.
* **[SweetAlert2](https://sweetalert2.github.io/):** Modales y alertas interactivas personalizadas.

---

## 📂 Estructura del Proyecto

```text
src/
│
├── assets/                  # Recursos gráficos y vectores
├── components/              # Componentes estructurales y de navegación
│   ├── routes/
│   │   └── Rutas.jsx        # Enrutador central de la aplicación
│   ├── Navbar.jsx           # Barra de navegación superior con estado de sesión
│   ├── SidebarLeft.jsx      # Menú lateral izquierdo de accesos rápidos
│   ├── SidebarRight.jsx     # Menú lateral derecho de guías e información
│   ├── ScrollToTop.jsx      # Restablecedor automático de scroll por ruta
│   └── SplashScreen.jsx     # Pantalla de carga inicial animada
│
├── pages/                   # Vistas principales de la aplicación
│   ├── Home.jsx             # Panel principal y último sismo detectado
│   ├── Terremotos.jsx       # Tabla histórica de eventos sísmicos de la API
│   ├── Hospitales.jsx       # Guía geolocalizada de centros de salud en Tucumán
│   ├── Emergencias.jsx      # Directorio telefónico de emergencias
│   ├── ComoActuar.jsx       # Protocolos de seguridad ante sismos
│   ├── ComoFunciona.jsx     # Explicación técnica del funcionamiento de la app
│   ├── TiposSismos.jsx      # Clasificación teórica de sismos y ondas P/S
│   ├── Login.jsx            # Autenticación, registro y recuperación de contraseña
│   └── Error404.jsx         # Vista personalizada para rutas no encontradas
│
├── App.jsx                  # Componente raíz con lógica de Splash Screen
├── App.css                  # Estilos globales, variables CSS y animaciones
└── main.jsx                 # Punto de entrada de React DOM y StrictMode

--

## ⚙️ Instalación y Ejecución Local

1. *Clonar el repositorio:*
   bash
   git clone https://github.com/belpalavecino3-hue/Siso-Frontend.git
   cd Siso-Frontend

2. *bash*
    
   npm install 

3. *Ejecutar el entorno de desarrolo*  

   npm run dev