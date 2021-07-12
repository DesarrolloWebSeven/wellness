![](https://cdn-images-1.medium.com/fit/t/1600/480/1*4izVrbT8LE14PeLaBg9vjA.png)


----------
## Wellness TechGroup - Prueba técnica

Pasos para poner en funcionamiento el proyecto:

 ## **Frontend**
1. Clonar el repositorio: [Haz click aquí](https://github.com/DesarrolloWebSeven/wellness.git)
2. Una vez dentro del proyecto por medio de la consola use el comando: `npm install`
3. Una vez termine de descargar las dependencias requeridas, inicie el proyecto con el comando: `npm run serve`
4. En su navegador, asegurese de que la ruta: `http://localhost:8080/` muestra lo siguiente:

<a href="#"><img src="https://i.ibb.co/N3cJ4ZW/pantallazo1.png" alt="pantallazo1" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

## **Backend**
A continuación en otra ventana de la consola o terminal dentro del proyecto acceda a la carpeta `backend`, puede hacerlo con el comando `cd backend` y siga los siguientes pasos:

1. Una vez dentro del proyecto por medio de la consola use el comando: `npm install`
2. Mientras se instalan las dependencias deberias configurar la conexión a la base de datos, para ello debes crear un archivo dentro del mismo directorio backend con el nombre: `.env` dentro de este archivo crea lo siguiente:
===========================================<br>
`PORT_SERVER = 8083` <br>
`DB_HOST = "Tu Host de atlas"`<br>
`DB_USER = "Tu usuario"`<br>
`DB_PASS = "Tu constraseña"`<br>
`DB_NAME = "El nombre de tu base de datos`<br>
=============================================<br>
**nota:** los valores van a cambiar dependiendo de tu cluster en Mongo Atlas. Si necesitas ayuda con esta parte mira [Aqui la documentación](https://docs.atlas.mongodb.com/driver-connection/)

3. Una vez termine de descargar las dependencias requeridas, inicie el proyecto con el comando: `node app` la consola respondera con: 
` Server OK in port 8083` 
`Conexión a MongoDB Ok!!`

## **Stack Técnologico**
Apartir de este momento ya podras usar esta app de facturación que tiene los siguientes detalles:

-	Importa valores desde un fichero CSV, con columnas y datos ficticios, y almacenarlo en BBDD (NoSQL)
- Backend NodeJS: encargado de importar los datos y exponerlos en una API que permita hacer operaciones CRUD sobre los datos
- []Frontend VueJS3: encargado de consumir la API anterior y presentar los datos en una tabla, y realizar las operaciones CRUD desde la misma


Espero que esta app y la información que he compartido le resulte útil para seguir avanzando.
Muchas Gracias.
Comentarios => { [Nos vemos pronto](https://www.linkedin.com/in/victorbonillac/) } 

