# Test Front-End MercadoLibre

## Estructura de carpetas

Todo el código fuente está dentro del directorio "src". Dentro hay un directorio de cliente y servidor. Todo el código front-end (react, css, js, etc.) está en el directorio "client". Los componentes los desarrollé usando diseño atómico (atom design), por lo que están en sub-carpetas atoms, molecules, organisms, pages y templates. El código back-end de node / express está en el directorio "server".

## Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/marcos0x/meli-test

# Ir dentro del directorio
cd meli-test

# Instalar dependencias
yarn (o npm install)
```

### Modo de desarrollo

En el modo de desarrollo, hay 2 servidores en ejecución. El código de front-end es servido por webpack que ayuda con la recarga en tiempo real. El código de back-end es servido por node / express usando nodemon que ayuda a reiniciar automáticamente el servidor cada vez que cambia el código del lado del servidor.

```bash
# Iniciar servidor de desarrollo
yarn dev (o npm run dev)
```

### Modo de producción

En el modo de producción, solo hay un servidor en ejecución. Todo el código del lado del cliente se incluye en archivos estáticos utilizando webpack y es servido por node / express.

```bash
# Compilación para producción
yarn build (o npm run build)

# Iniciar servidor de producción
yarn start (o npm start)
```

### Modo test
Todo el desarrollo está basado en test (TDD), por lo que cualquier cambio en el código reinicia los tests.

```bash
# Iniciar tests
yarn test (o npm test)
```

## Herramientas / Librerías

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/ReactTraining/react-router)
* [Webpack](https://github.com/webpack/webpack)
* [Nodemon](https://nodemon.io/)
* [Babel](https://github.com/babel/babel)
* [Express](https://github.com/expressjs/express)
* [React Loadable](https://github.com/thejameskyle/react-loadable)
* [Jest](https://github.com/facebook/jest)
* [Flow](https://github.com/facebook/flow)
* [Flow Typed](https://github.com/flowtype/flow-typed)
* [ESLint](https://github.com/eslint/eslint)
* [Stylelint](https://github.com/stylelint/stylelint)
* [Prettier](https://github.com/prettier/prettier)
