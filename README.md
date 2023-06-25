# API-REST
Api Rest que permite manejar librerías y libros asociados a ellas.
Desarrollo de una API de librerias

Descripción del Proyecto:
- Se crea una API REST que nos permite crear, consultar, actualizar y eliminar tanto como usuarios libros y librerías mediante los siguientes metodos:

    .get("/obtener-todos")
    .get("/obtener-por-id/:id")
    .post("/crear")
    .put("/editar/:id")
    .delete("/eliminar/:id")
    .post("/login")

- El proyecto se baso en el lenguaje Node.js y para su configuración inicial se utilizaron las siguientes librerias:

   °Express=>(Framework que se utiliza para la creación de middlewares para el manejo de errores y realizar peticiones http).

   °Secuelize=>(ORM de node.js que nos permite manipular la base de datos de manera mas eficaz y conveniente).

   °Mysql2=>(Conector a la Base de Datos no relacional Mysql).

   °Passport-jwt=>(Nos permite crear un middleware passport con estrategia de tipo jwt, que permitirá recibir un token vía header y hacer su validación).

   °Passport=>(Es un middleware para express que nos permite implementar estrategias de autenticación de una manera rápida y simple.)

   °Jsonwebtoken=>(Es un estándar para transmitir información de forma segura en internet, por medio de archivos en formato JSON, que es un tipo de archivo de texto plano con el cual se pueden crear parámetros y asignarles un valor)

Tecnologías empleadas:
   1.-NodeJs
   2.-MySql

Inicialización del proyecto: npm start.

Puerto del proyecto: localhost:3000.

Author del proyecto: Exequiel Soldano.

