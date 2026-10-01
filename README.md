🚨 S.I.S.O. — Sistema Inteligente de Detección Sísmica 🌎

S.I.S.O. es un proyecto académico que combina 💻 software y 🔌 hardware para detectar movimientos mediante 📡 sensores, procesar la información y generar 🚨 alertas cuando se superan determinados parámetros.

El sistema utiliza un 🧠 ESP32 conectado a un 📡 sensor MPU6050 y cuenta con una 🌐 interfaz web desarrollada con ⚛️ React para visualizar el estado del sistema.

🎯 Objetivo

Desarrollar un prototipo capaz de:

- 📡 Detectar movimientos mediante sensores.
- ⚙️ Procesar los datos utilizando un ESP32.
- 📊 Analizar los valores obtenidos.
- 🚨 Generar alertas cuando se cumplen determinadas condiciones.
- 💻 Mostrar la información mediante una interfaz web.

⚙️ Funcionamiento

El funcionamiento básico de S.I.S.O. es:

📡 MPU6050 → 🧠 ESP32 → ⚙️ Procesamiento → 📊 Análisis → 🚨 Alerta → 💻 Panel web

📡 El MPU6050 obtiene los datos de movimiento.

🧠 El ESP32 recibe y procesa la información.

📊 Cuando los valores superan los parámetros establecidos, se genera una 🚨 alerta y el estado puede visualizarse desde el 💻 panel web.

🔌 Componentes de hardware

🔧 Componente| ⚙️ Función
🧠 ESP32| ⚙️ Procesamiento y control
📡 MPU6050| 📊 Detección de movimiento
🔌 Módulo relé| 🚨 Control de la alarma
🔊 Bocina / sirena| 🚨 Alerta sonora
🖥️ Pantalla OLED| 📊 Visualización local
🔩 Protoboard| 🔧 Montaje del circuito

💻 Tecnologías utilizadas

⚛️ Frontend

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🌐 HTML5
- 🎨 CSS3
- 🅱️ Bootstrap

🛠️ Herramientas

- 💻 Visual Studio Code
- 🟢 Node.js
- 📦 npm
- 🔀 Git
- 🐙 GitHub

🔌 Hardware

- 🧠 ESP32
- 📡 MPU6050
- 🔌 Módulo relé
- 🖥️ Pantalla OLED
- 🔊 Bocina / sirena

🖥️ Panel de monitoreo

La aplicación web permite visualizar información relacionada con:

- 🚦 Estado del sistema.
- 📡 Estado de los sensores.
- 📊 Valores obtenidos.
- 🚨 Estado de las alertas.

📸 Capturas

🖥️ Panel principal

📌 Agregar aquí una captura del panel desarrollado con React.

🔌 Circuito

📌 Agregar aquí una fotografía del ESP32 conectado al MPU6050 y los demás componentes.

🚨 Sistema de alerta

📌 Agregar aquí una fotografía del mecanismo de alerta.

🚀 Instalación

📋 Requisitos

Antes de ejecutar el proyecto necesitamos tener instalado:

- 🟢 Node.js
- 📦 npm
- 🔀 Git
- 💻 Visual Studio Code

📥 Clonar el repositorio

git clone URL_DEL_REPOSITORIO

📂 Ingresar al proyecto

cd SISO

📦 Instalar dependencias

npm install

▶️ Ejecutar el proyecto

npm run dev

Luego, ⚡ Vite mostrará en la terminal la dirección local para acceder a la aplicación.

👥 Integrantes

- 👩‍💻 Ana Carolina Palavecino
- 👩‍💻 Rocío Belén Palavecino

🎓 Tecnicatura Universitaria en Programación

📚 Proyecto académico

🚨 S.I.S.O. — Sistema Inteligente de Detección Sísmica

Este proyecto integra:

💻 Programación · 🌐 Desarrollo web · 🔌 Electrónica · 📡 Sensores · 🧠 Microcontroladores

---

⭐ S.I.S.O. — Detectar · Procesar · Alertar · Monitorear 🚨