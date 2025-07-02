# EXAMEN FINAL DAE - PAPIBARA03 (FakeStore API)

Proyecto web desarrollado en React + Vite para el examen final del curso DAE. Consume datos desde una API externa, tiene múltiples páginas, manejo de estado con Zustand y estilos con Bootstrap.

Enlace del despliegue en Render:  
https://examenfinal-dae.onrender.com

---

## Instrucciones para ejecutar el proyecto localmente

1. Clona el repositorio:

```bash
git clone https://github.com/Sgiane11a/EXAMENFINAL_DAE.git
```
Accede al directorio del proyecto:
```
cd EXAMENFINAL_DAE
```
Instala las dependencias:
```
npm install
```
Ejecuta el proyecto:
```
npm run dev
```
Estructura del proyecto
```
EXAMENFINAL_DAE/
├── public/
├── src/
│   ├── components/
│   │   ├── CardList/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Formulario/
│   │   └── Hero/
│   ├── service/
│   │   └── fakestore.service.js
│   ├── store/
│   │   └── fakestore.store.js
│   ├── utils/
│   │   └── fakestore.utils.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

# Contenido del proyecto:

El proyecto cuenta con tres páginas principales:

Home: Página de inicio con un carrusel de imágenes (componente Hero).

Listado: Muestra productos consumidos desde la API externa: https://fakestoreapi.com/products

Contactanos: Formulario de contacto para consultas o sugerencias.

## También incluye un Header y un Footer, utilizando la librería de Bootstrap.

# Dependencias utilizadas

bootstrap@5.3.7
zustand
axios
react-router-dom

# Estilos
Todo el proyecto está maquetado con la librería Bootstrap 5.3.7, asegurando una estructura responsiva. El Header y el Footer están presentes en todas las vistas.
