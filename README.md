
# Prueba Técnica en Angular

Este proyecto es una prueba técnica en Angular que consiste en un diseño web de un login, donde el usuario puede iniciar sesión y registrarse. El proyecto no está conectado a una base de datos ni realiza acciones adicionales. El diseño es libre, pero sigue los lineamientos especificados a continuación.

## Lineamientos

- Utilizar la librería gráfica de PrimeNG.
- Utilizar Figma para realizar el diseño.
- Crear un pequeño flujo en Figma que se debe respetar en el desarrollo.
- Subir el proyecto a Git en un repositorio público.
- La versión de Angular es libre a elección.

## Características Adicionales

- Validaciones de campos como email, RUT, entre otras.
- Uso de transiciones y aspectos adicionales según la creatividad del postulante.

## Tareas Realizadas

- **Figma Flow:** [Enlace al Figma Flow](https://www.figma.com/proto/NfhfujIOFaRpJDgzCOiaZk/Web-William?page-id=634%3A397&node-id=634-5514&viewport=404%2C202%2C0.05&t=Rg7R1pD18PNm81Fb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=634%3A5514)
  
- **Validaciones Implementadas:**
  - Validación de Email.
  - Validación de RUT.
  - Validación de campos requeridos.

## Notas sobre la Validación de RUT

Se agregó una validación de RUT con la librería `rut.js`. Sin embargo, la forma del formateo en el input no funcionaba como se esperaba. Utilizando ChatGPT, creé una validación personalizada que cumple con los requisitos y terminó funcionando correctamente.

## Estructura del Proyecto

```
src/
|-- app/
|   |-- components/
|   |   |-- generative-text/
|   |   |-- login/
|   |   |-- login-form/
|   |   |-- register-form/
|   |-- app-routing.module.ts
|   |-- app.component.css
|   |-- app.component.html
|   |-- app.component.spec.ts
|   |-- app.component.ts
|   |-- app.module.server.ts
|   |-- app.module.ts
|-- assets/
|-- index.html
|-- main.server.ts
|-- main.ts
|-- styles.css
|-- angular.json
|-- package-lock.json
|-- package.json
|-- README.md
|-- server.ts
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.spec.json
```

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/tu-usuario/angular-test.git
```

2. **Navegar al directorio del proyecto:**

```bash
cd angular-test
```

3. **Instalar las dependencias:**

```bash
npm install
```

4. **Ejecutar la aplicación:**

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200` para ver la aplicación en funcionamiento.

## Dependencias

- **Angular**
- **PrimeNG**
- **Figma**

## Autor

William Ugarte

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

---

Este README proporciona una guía básica para entender y ejecutar el proyecto. Si necesitas más detalles sobre la implementación o la estructura del código, no dudes en revisar los archivos fuente y los comentarios en el código.
