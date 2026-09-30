# 🚨 S.I.S.O.

## 🌎 Sistema Inteligente de Detección Sísmica

> 🔎 **Detectar · 🧠 Procesar · 🚨 Alertar · 💻 Monitorear**

![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-yellow)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue)
![Lenguaje](https://img.shields.io/badge/Lenguaje-JavaScript-yellow)
![Hardware](https://img.shields.io/badge/Hardware-ESP32-green)
![UI](https://img.shields.io/badge/UI-Bootstrap-purple)

---

# 📌 Descripción del proyecto

**S.I.S.O. (Sistema Inteligente de Detección Sísmica)** 
🔗 El proyecto combina diferentes áreas:

* 💻 Programación
* 🔌 Electrónica
* 📡 Sensores
* 🌐 Desarrollo web
* 🤖 Internet de las Cosas (IoT)
* 🧠 Procesamiento de datos
* 🚨 Sistemas de alerta

El objetivo es integrar **hardware y software** dentro de un mismo sistema de monitoreo.

> ⚠️ **Importante:** S.I.S.O. 
---

# 🎯 Objetivos

## 🏆 Objetivo general

Desarrollar un prototipo capaz de **detectar movimientos mediante sensores, procesar los datos obtenidos y generar una alerta** cuando se cumplan determinados parámetros.

## 📋 Objetivos específicos

* 📡 Detectar movimientos y aceleraciones mediante sensores.
* 🧠 Utilizar un ESP32 como controlador principal.
* 📊 Procesar los datos obtenidos por los sensores.
* ⚙️ Establecer parámetros para determinar diferentes estados.
* 🚨 Generar alertas ante determinados niveles de movimiento.
* 💻 Visualizar información mediante una interfaz web.
* 📝 Registrar los eventos detectados.
* 🔌 Mostrar el estado de los dispositivos.
* 🔗 Integrar hardware y software.

---

# 💡 Justificación

Los movimientos sísmicos pueden producirse de manera inesperada, por lo que resulta importante contar con mecanismos que permitan **detectar cambios de movimiento y comunicar la información obtenida**.

S.I.S.O.

* 📡 Detección de movimientos.
* 📊 Procesamiento de datos.
* 🚨 Generación de alertas.
* 💻 Desarrollo de interfaces.
* 🔌 Integración de hardware y software.

Además, el proyecto permite aplicar conocimientos adquiridos durante la **Tecnicatura Universitaria en Programación**.

---

# ⚙️ ¿Cómo funciona S.I.S.O.?

El funcionamiento general del sistema se puede representar de la siguiente manera:

```text
        ┌─────────────────────┐
        │       📡 MPU6050    │
        │ Sensor de movimiento│
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │       🧠 ESP32      │
        │ Procesamiento datos │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │   📊 Análisis de    │
        │      valores        │
        └──────────┬──────────┘
                   │
                   ▼
             ¿Supera el
              parámetro?
              /        \
            NO          SÍ
            │            │
            ▼            ▼
       ┌─────────┐   ┌─────────┐
       │ 🟢 Normal│   │ 🚨 Alerta│
       └─────────┘   └────┬────┘
                           │
                           ▼
                  ┌────────────────┐
                  │ 💻 Panel S.I.S.O.│
                  └────────────────┘
```

## 1️⃣ 📡 Detección

El sensor **MPU6050** obtiene información relacionada con el movimiento y la aceleración.

## 2️⃣ 🧠 Procesamiento

El **ESP32** recibe los valores provenientes del sensor y realiza el procesamiento correspondiente.

## 3️⃣ 📊 Análisis

Los valores obtenidos son analizados y comparados con los parámetros establecidos para el prototipo.

## 4️⃣ 🚨 Alerta

Cuando se cumplen las condiciones definidas, el sistema puede activar mecanismos de alerta.

## 5️⃣ 💻 Monitoreo

La información puede ser representada mediante la interfaz web desarrollada con **React**.

---

# 🔌 Componentes de hardware

## 🧠 ESP32

El ESP32 funciona como el **controlador principal** del prototipo.

Sus funciones incluyen:

* 📥 Recibir datos del sensor.
* 🧮 Procesar información.
* ⚙️ Evaluar condiciones.
* 🚨 Controlar mecanismos de alerta.
* 📡 Permitir la comunicación con otros componentes.

---

## 📡 MPU6050

El MPU6050 es un módulo que incorpora:

* 📈 Acelerómetro.
* 🔄 Giroscopio.

En S.I.S.O. se utiliza para obtener información relacionada con el **movimiento y la aceleración**.

---

## 🔌 Módulo de relé

El relé permite controlar un dispositivo externo mediante una señal proveniente del sistema.

En el prototipo puede utilizarse para controlar una **🔊 bocina o sirena**.

---

## 🔊 Bocina / Sirena

Se utiliza como mecanismo de **alerta sonora** cuando el sistema determina que debe generarse una alerta.

---

## 🖥️ Pantalla OLED

La pantalla OLED puede utilizarse para mostrar información directamente en el dispositivo:

* 🟢 Estado del sistema.
* 📊 Valores obtenidos.
* 🚨 Estado de alerta.

---

## 🔩 Protoboard y cables

La protoboard permite realizar el montaje del circuito.

Los cables Dupont permiten conectar los diferentes componentes.

---

# 🧩 Resumen de componentes

| 🔧 Componente    | ⚙️ Función              |
| ---------------- | ----------------------- |
| 🧠 ESP32         | Control y procesamiento |
| 📡 MPU6050       | Detección de movimiento |
| 🔌 Relé          | Control de dispositivos |
| 🔊 Bocina/Sirena | Alerta sonora           |
| 🖥️ OLED         | Visualización local     |
| 🔩 Protoboard    | Montaje                 |
| 🔗 Cables Dupont | Conexiones              |

---

# 💻 Tecnologías utilizadas

## ⚛️ Frontend

| 💻 Tecnología | 📌 Utilización            |
| ------------- | ------------------------- |
| ⚛️ React      | Desarrollo de la interfaz |
| ⚡ Vite        | Entorno de desarrollo     |
| 🟨 JavaScript | Lógica de la aplicación   |
| 🌐 HTML5      | Estructura                |
| 🎨 CSS3       | Estilos                   |
| 🅱️ Bootstrap | Diseño y componentes      |

## 🔌 Hardware

* 🧠 ESP32
* 📡 MPU6050
* 🔌 Módulo de relé
* 🖥️ Pantalla OLED
* 🔊 Bocina / Sirena

## 🛠️ Herramientas

* 💻 Visual Studio Code
* 🔀 Git
* 🐙 GitHub
* 🟢 Node.js
* 📦 npm

---

# 🖥️ Panel de monitoreo

S.I.S.O. cuenta con una interfaz web desarrollada con **⚛️ React**.

El panel tiene como objetivo centralizar la información del sistema y facilitar su monitoreo.

### 📊 Información contemplada

* 🚦 Estado general del sistema.
* 📡 Estado de los sensores.
* 📈 Valores registrados.
* 🚨 Estado de las alertas.
* 🔊 Estado de la alarma.
* 📋 Historial de eventos.
* 🕐 Fecha y hora.

---

# 📸 Capturas del proyecto

## 🖥️ Panel principal

📌 **Agregar aquí una captura real del panel desarrollado con React.**

```text
┌─────────────────────────────────┐
│                                 │
│     📸 CAPTURA DEL PANEL        │
│                                 │
└─────────────────────────────────┘
```

---

## 🔌 Circuito

📌 **Agregar aquí una fotografía real del ESP32 conectado al MPU6050 y los demás componentes.**

```text
┌─────────────────────────────────┐
│                                 │
│     📸 FOTO DEL CIRCUITO        │
│                                 │
└─────────────────────────────────┘
```

---

## 🚨 Sistema de alerta

📌 **Agregar aquí una fotografía o captura del mecanismo de alerta.**

```text
┌─────────────────────────────────┐
│                                 │
│     📸 FOTO DE LA ALERTA        │
│                                 │
└─────────────────────────────────┘
```

---

# 🗂️ Estructura del proyecto

```text
SISO/
│
├── 📁 public/
│   └── ...
│
├── 📁 src/
│   ├── 📁 components/
│   │   └── ...
│   │
│   ├── 📄 App.jsx
│   ├── 📄 main.jsx
│   └── ...
│
├── 📄 index.html
├── 📦 package.json
├── 📦 package-lock.json
├── ⚙️ vite.config.js
└── 📖 README.md
```

---

# 🚀 Instalación

## 📋 Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

* 🟢 Node.js
* 📦 npm
* 🔀 Git
* 💻 Visual Studio Code

## 1️⃣ 📥 Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## 2️⃣ 📂 Ingresar al proyecto

```bash
cd SISO
```

## 3️⃣ 📦 Instalar dependencias

```bash
npm install
```

## 4️⃣ ▶️ Ejecutar el proyecto

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde estará disponible la aplicación.

Por ejemplo:

```text
http://localhost:5173/
```

---

# 🧪 Pruebas

Las pruebas tienen como objetivo comprobar el funcionamiento de los diferentes componentes del sistema.

### 📡 Pruebas del sensor

Verificar que el **MPU6050** pueda proporcionar valores de movimiento.

### 🧠 Pruebas del ESP32

Comprobar que el ESP32 pueda recibir y procesar correctamente la información.

### 🚨 Pruebas de alerta

Comprobar la activación del mecanismo de alerta cuando se cumplen los parámetros establecidos.

### 💻 Pruebas de interfaz

Verificar que el panel web muestre correctamente la información.

### 🔗 Pruebas de integración

Comprobar la comunicación entre los diferentes componentes.

---

# 📊 Resultados esperados

Se espera que el prototipo pueda:

1. 📡 Detectar movimiento.
2. 📥 Obtener los valores del sensor.
3. 🧠 Procesar la información mediante el ESP32.
4. 📊 Analizar los valores obtenidos.
5. 🚦 Determinar el estado correspondiente.
6. 🚨 Generar una alerta cuando corresponda.
7. 💻 Mostrar la información en el sistema de monitoreo.


---

# 🚀 Futuras mejoras

## 📡 Comunicación

* 📶 Comunicación inalámbrica entre dispositivos.
* 🔗 Incorporación de varios nodos de medición.
* 🧠 Comunicación entre diferentes ESP32.

## 📊 Datos

* 💾 Almacenamiento de mediciones.
* 📋 Historial de eventos.
* 📈 Gráficos en tiempo real.
* 📊 Análisis de datos históricos.

## 🚨 Alertas

* 🟢🟡🔴 Diferentes niveles de alerta.
* 📱 Notificaciones.
* 🔊 Mejoras en la alerta sonora.
* 💡 Alertas visuales.

## 📍 Localización

* 📍 Geolocalización de los nodos.
* 🗺️ Visualización de dispositivos en un mapa.

## 🤖 Inteligencia

* 🧠 Análisis avanzado de los datos.
* 📊 Clasificación de diferentes tipos de movimiento.
* 🤖 Posible incorporación de técnicas de inteligencia artificial como línea futura de investigación.

---

# 🔄 Evolución del proyecto

```text
          📋 ETAPA 1
       Diseño del proyecto
              ↓
          💻 ETAPA 2
    Desarrollo de la interfaz
              ↓
          🧠 ETAPA 3
      Configuración ESP32
              ↓
          📡 ETAPA 4
       Integración MPU6050
              ↓
          📊 ETAPA 5
     Procesamiento de datos
              ↓
          🚨 ETAPA 6
      Sistema de alertas
              ↓
          🔗 ETAPA 7
      Integración completa
              ↓
          🧪 ETAPA 8
       Pruebas y mejoras
```

---

# 📚 Conocimientos aplicados

Durante el desarrollo de S.I.S.O. se aplican conocimientos relacionados con:

* 💻 Programación
* 🟨 JavaScript
* ⚛️ React
* 🌐 Desarrollo web
* 🔌 Electrónica
* 📡 Sensores
* 🧠 Microcontroladores
* 🤖 IoT
* 📊 Procesamiento de datos
* 🎨 Diseño de interfaces
* 🔀 Control de versiones
* 🐙 Git y GitHub
* 🧪 Pruebas de software

---

# 👥 Integrantes

## 👩‍💻 Ana Carolina Palavecino

🎓 **Tecnicatura Universitaria en Programación**

## 👩‍💻 Rocío Belén Palavecino

🎓 **Tecnicatura Universitaria en Programación**

---

# 🎓 Proyecto académico

## 🚨 S.I.S.O. — Sistema Inteligente de Detección Sísmica

Proyecto desarrollado en el marco de la **Tecnicatura Universitaria en Programación**.

El proyecto integra conocimientos de:

💻 Programación
🌐 Desarrollo web
🔌 Electrónica
📡 Sensores
🧠 Microcontroladores
🤖 IoT
📊 Procesamiento de datos

---

# ⭐ S.I.S.O.

## 🚨 Sistema Inteligente de Detección Sísmica

> 🔎 **Detectar.**
> 🧠 **Procesar.**
> 🚨 **Alertar.**
> 💻 **Monitorear.**

### 💻 Software + 🔌 Hardware + 📡 Sensores + 🤖 IoT

