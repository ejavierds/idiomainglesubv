# 🎓 UBV Lara — Guía Interactiva de Inglés Técnico e Inglés Interactivo (Clase #1)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Production%20Ready-emerald)
![UBV](https://img.shields.io/badge/UBV-Estudios%20Avanzados%20Lara-cyan)

Aplicación Web Interactiva (**Single Page Application**) con arquitectura **Glassmorphism**, diseño **Mobile-First** y baja carga cognitiva, desarrollada para apoyar la enseñanza del idioma inglés a los estudiantes de **Estudios Avanzados** de la **Universidad Bolivariana de Venezuela (UBV)** en el estado Lara.

---

## 🌟 Características Principales

### 🎨 1. Diseño Visual UI/UX & Glassmorphism
- **Estética Glassmorphism:** Fondos translúcidos con `backdrop-filter: blur()`, sutiles bordes translúcidos y orbes de iluminación ambiental flotantes.
- **Mobile-First & 100% Responsivo:** Adaptado a pantallas de teléfonos móviles, tablets, laptops y monitores ultra-wide.
- **Baja Carga Cognitiva:** Espaciado generoso, tipografías modernas (*Plus Jakarta Sans* para encabezados e *Inter* para lectura continua) e iconos intuitivos (*Lucide Icons*).
- **Modo Asistente Bilingüe (EN/ES):** Botón para alternar la visualización de explicaciones y traducciones de apoyo en español.

### 📚 2. Contenido Curricular Integrado (Clase #1)
- **Tema 1: Technical English 🛠️**
  - Concepto y definición formal.
  - Importancia y características clave con viñetas animadas e insignias (`✅`).
  - **Tarjetas 3D Interactivas (Flip Cards):** Términos de Ciencias de la Computación (*Software*, *Hardware*, *Network*, *Database*, *Password*, *File*) con transcripción fonética, ejemplos prácticos y audio nativo.
- **Tema 2: Interactive English 🗣️**
  - Concepto y canales de uso (debates, entrevistas, videollamadas, chats).
  - Bloques visuales reducidos para baja carga cognitiva: beneficios reales y características lingüísticas esenciales.
- **Tema 3: Importance of Interactive English Classes 🎓**
  - Comparativa en dos paneles: **Basic Level** (saludos, presentaciones, superación del miedo a hablar) vs. **Intermediate Level** (descripciones, debates y opiniones críticas).
- **Sección Interactiva: Quizzes y Repaso 🧠**
  - 14 preguntas oficiales (7 de Inglés Técnico + 7 de Inglés Interactivo).
  - Botón de **"Reveal Answer" / "Hide Answer"** con acordeón animado.
  - Sistema de progreso personal (*"Mastered ✅"*) guardado en el navegador (`localStorage`).
  - Audio pronunciación nativa para cada pregunta y respuesta mediante la **Web Speech API**.
- **Instrucciones para la Tarea (Task Instructions) 📝**
  - Recuadro destacado (*Callout con resplandor amber*) con los 6 pasos oficiales para el trabajo en parejas.
  - **Simulador de Diálogo Interactivo:** Laboratorio de práctica en parejas con botón para **invertir roles (A ⇄ B)** y escucha de oraciones individuales o diálogo completo.

### 🚀 3. Metadatos, SEO y Rendimiento
- **Favicon SVG vectorial:** Escudo académico y tecnológico integrado.
- **Open Graph y Twitter Cards:** Optimizado para previsualizaciones impecables al compartirse en WhatsApp, Telegram, LinkedIn, X y Facebook.
- **Cero Dependencias de Construcción:** Funciona directamente abriendo `index.html` o desplegando en cualquier hosting estático sin necesidad de Node.js o bundlers.

---

## 📂 Estructura del Proyecto

```text
├── index.html       # Estructura semántica HTML5, metadatos SEO y Open Graph
├── styles.css       # Estilos Glassmorphism, animaciones 3D Flip Card y temas
├── script.js        # Lógica interactiva, Web Speech API, quizzes y simulador
├── vercel.json      # Configuración de despliegue optimizada para Vercel
└── README.md        # Documentación del proyecto
```

---

## ⚡ Cómo Desplegar

### Opción 1: Despliegue en Vercel (Recomendada)
1. Sube este repositorio a tu cuenta de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Haz clic en **"Add New..."** > **"Project"**.
4. Importa tu repositorio `Web de Inglés`.
5. Deja la configuración por defecto (Vercel detectará automáticamente que es un proyecto estático) y haz clic en **Deploy**.
6. ¡Listo! Tu web estará disponible en un subdominio `https://tu-proyecto.vercel.app` en segundos.

### Opción 2: GitHub Pages
1. Ve a los ajustes del repositorio en GitHub (**Settings** > **Pages**).
2. En **Source**, selecciona `Deploy from a branch` y elige la rama `main` (directorio `/root`).
3. Guarda y accede a la URL pública generada.

### Opción 3: Uso Local
Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

---

## 👥 Créditos Académicos e Institucionales

- **Institución:** Universidad Bolivariana de Venezuela (UBV) — Eje Territorial General Juan Jacinto Lara.
- **Programa:** Estudios Avanzados.
- **Profesor de la Unidad Curricular:** David Miranda
- **Desarrollador Web Full Stack & UI/UX:** [ejavierds](https://ejavierds.vercel.app)

---

© 2026 Universidad Bolivariana de Venezuela (UBV) — Todos los derechos reservados.
