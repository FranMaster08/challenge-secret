# Secret File Service

Este proyecto implementa un servicio y un controlador en JavaScript para interactuar con archivos secretos en un servidor remoto. Utiliza las siguientes tecnologías y dependencias:

- **Axios**: Una biblioteca de cliente HTTP basada en promesas para realizar solicitudes HTTP al servidor remoto.

- **Chai**: Un marco de aserciones que proporciona una sintaxis expresiva para realizar afirmaciones en las pruebas.

- **Dotenv**: Un módulo para cargar variables de entorno desde un archivo `.env`.

- **Express**: Un marco de aplicación web rápido, minimalista y flexible para construir API y rutas.

- **http-errors**: Una biblioteca para crear y manipular errores HTTP de forma sencilla.

- **Mocha**: Un marco de pruebas flexible y divertido para JavaScript que se ejecuta tanto en Node.js como en el navegador.

- **Sinon**: Una biblioteca independiente que proporciona spies, stubs y mocks para JavaScript.

- **Standard**: Una herramienta de linting para JavaScript que ayuda a mantener un estilo de código consistente y legible.

## Configuración

Antes de utilizar el servicio, asegúrate de configurar correctamente las variables de entorno en el archivo `.env`. Estas variables son necesarias para establecer la URL del servidor remoto y el token de autenticación. **Si no se suministran los valores en el archivo `.env`, se tomarán los siguientes valores por defecto**:

```plaintext
# Archivo .env

PORT=5002
TBX_ECHO_SERVER=https://echo-serv.tbxnet.com
TBX_ECHO_SERVER_TOKEN=aSuperSecretKey
```

## Instalación

1. Clona este repositorio en tu máquina local.

```
git clone https://github.com/FranMaster08/challenge-secret/tree/master
```

2. Navega al directorio del proyecto.

```
cd secret-file-service
```

3. Instala las dependencias utilizando npm.

```
npm install
```

## Ejecución

Puedes ejecutar el proyecto de dos maneras: de manera local o utilizando Docker Compose. Asegúrate de tener instalada la versión de Node.js 14.

### Ejecución Local

1. Inicia el servicio ejecutando el siguiente comando:

```
npm start
```

2. El servicio estará disponible en `http://localhost:3000`.

### Ejecución con Docker Compose

1. Asegúrate de tener Docker y Docker Compose instalados en tu máquina.


2. Ejecuta el siguiente comando para iniciar el contenedor:

```
    docker-compose up -d
```

3. El servicio estará disponible en `http://localhost:5002`.

## Ejemplos de Peticiones CURL

A continuación, se muestran ejemplos de peticiones CURL para interactuar con el servicio y el controlador:

1. Obtener un archivo secreto específico:

```bash
curl -X GET "http://localhost:5002/files?fileName=myfile.txt"
```

2. Obtener todos los archivos secretos:

```bash
curl -X GET "http://localhost:5002/files"
```

Ten en cuenta que debes reemplazar `http://localhost:5002` con la URL correspondiente al servidor donde se encuentra desplegado el servicio.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacerlo. Puedes abrir problemas (issues) o enviar solicitudes de extracción (pull requests) en este repositorio.

## Licencia

Este proyecto está bajo la Licencia ISC. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---
