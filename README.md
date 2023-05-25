# Mini proyecto de ejemplo <!-- omit from toc -->

## Portafolio en React <!-- omit from toc -->

## Tabla de contenidos <!-- omit from toc -->

- [Proyecto](#proyecto)
  - [Clonar proyecto con Git](#clonar-proyecto-con-git)
  - [Detalles](#detalles)
    - [Scripts de NPM](#scripts-de-npm)
  - [Visualizar](#visualizar)
    - [Instalar dependencias de NPM](#instalar-dependencias-de-npm)
    - [Iniciar servidor de desarrollo](#iniciar-servidor-de-desarrollo)
- [Secciones cubiertas](#secciones-cubiertas)
  - [Enrutamiento (rutas)](#enrutamiento-rutas)
  - [Control de formularios](#control-de-formularios)

## Proyecto

### Clonar proyecto con Git

Para clonar el proyecto:

```
git clone https://github.com/sebaignacioo/react-portfolio-example.git
```

### Detalles

|                          |                                                   |
| ------------------------ | ------------------------------------------------- |
| **IDEs**                 | [![vscode-badge]][vscode-web]                     |
| **Lenguajes y entornos** | [![js-badge]][js-web] [![react-badge]][react-web] |
| **Estilos**              | [![tailwind-badge]][tailwind-web]                 |
| **Utilidades**           | [![vite-badge]][vite-web] [![npm-badge]][npm-web] |

#### Scripts de NPM

| Script            | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Ejecuta el entorno de desarrollo con Vite                          |
| `npm run build`   | Construye la aplicación, para su posterior despliegue.             |
| `npm run preview` | Permite visualizar la versión final y construída de la aplicación. |

### Visualizar

Una vez clonado el repositorio en tu computador, tendrás acceso al código fuente del proyecto. Debes ejecutar una serie de pasos para visualizar y trabajar en el proyecto:

#### Instalar dependencias de NPM

Con el proyecto abierto en Visual Studio Code, abrir terminal y ejecutar el siguiente comando:

```
npm install
```

#### Iniciar servidor de desarrollo

Una vez instalados los paquetes de NPM, podemos iniciar el servidor de desarrollo ejecutando `npm run dev`.

## Secciones cubiertas

### Enrutamiento (rutas)

El proyecto está estructurado de tal forma, en que la aplicación usa el concepto de SPA (Single Page Application), utilizando la libreria de enrutamiento `react-router-dom`. Esta librería nos permite renderizar componentes de React en base a la URL visitada por el usuario. En este proyecto, contamos con 3 rutas:

1. **Inicio** (`'/'`) Es la página de inicio de la aplicación.
2. **Acerca de** (`'/about'`) Es la página en donde se detallan la experiencia y logros de la persona.
3. **Contacto** (`'/contact'`) Es la página que tiene un formulario de contacto, en donde el usuario puede enviar un mensaje.

La lógica detrás del enrutamiento es el siguiente:

- Se tiene un Layout, que es la estructura de la aplicación, es decir, el contenido que se repite en todas las páginas (Header, links, etc).
- Ese layout (`Layout.jsx`) en su interior contiene un componente de la librería `react-router-dom`. Este componente (`<Outlet />`) es el que se encarga de renderizar el contenido, dependiendo de la ruta visitada.
- Para que esto funcione, se deben declarar las rutas y sus respectivos componentes a renderizar. En este proyecto, esa lógica se encuentra en el archivo `main.jsx`.

De esta forma, cada vez que se visite el sitio, la librería `react-router-dom` validará la URL ingresada, y renderizará el contenido dependiendo de la ruta escogida.

### Control de formularios

En la página de contacto (`Contact.jsx`) hay un formulario, que el usuario puede llenar para contactarse con la persona del portafolio. El formulario consta de `inputs`, que son los elementos HTML que permiten la interacción, donde el usuario puede escribir, y el sitio puede obtener esos datos y hacer algo con ellos. Típicamente esos datos son enviados a un backend para su tratamiento, pero para simplificación en este efecto, sólo se hará un `console.log` en el navegador cuando el usuario envíe su formulario.

En la misma página podemos ver el uso de `useState` y `useEffect` para controlar los datos ingresados, y haciendo uso de _Expresiones regulares_. Próximamente veremos una forma de simplificar este control, haciendo uso de hooks personalizados.

[vscode-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[vscode-web]: https://code.visualstudio.com/
[js-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[react-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge
[react-web]: https://reactjs.org/
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge
[tailwind-web]: https://tailwindcss.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=for-the-badge
[vite-web]: https://vitejs.dev/
[npm-badge]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=for-the-badge
[npm-web]: https://www.npmjs.com/
