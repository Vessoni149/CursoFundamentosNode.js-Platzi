// para ejecutar el codigo hay que usar en consola "node nombreArchivo.js" ver linea 14
//Los valores que no deben ir dentro del codigo como tokens o passwords o valores que vayan a cambiar. Para esto usamos varaibles de entorno, que se definen en consola, y con una consola powershell se definen así:
//$env:NOMBRE="Carlos"
//para acceder a la variable se usa "process.env.VARIABLE"
//las variables de entorno se escriben con mayuscula por convencion, si hay 2 palabras en la variable se separan con _ ej: MI_WEB
let nombre = process.env.NOMBRE;

//si no definimos una variable en la consola, podemos poner una por defecto seguido de doble |.
let apellido = process.env.APELLIDO || " sin apellido"

console.log("hola " + nombre + apellido + "asd");

//HERRAMIENTAS UTILES: 
//PARA DESARROLO:  para evitar ejecutar todo el tiempo ese comanso podemos usar nodemon, que cada vez que detecta cambios en nuestro codigo que estamos ejecutando o en cualquier archivo relacionado con el, va a volver a compilar y ejecutar ese codigo: npm install -g nodemon
//ahora para correr el archivo, en consola solo escribimos nodemon nombreArchivo. Entonces la prox que hagamos un cambio en el archivo y guardemos se ejecuta solo.

//otra herramienta util es PM2, no recomendada para desarrollo, pero SI para PRODUCCION.
//Es parecido a nodemon permite muchas cosas mas, como monitorear la aplicacion, si por lo que sea hay un cambio o se rompe, vuelve a ejecutar y levanta automaticamente.
//npm install -g pm2
//pm2 start nombreArchivo.js
//pm2 status      muestra las aplicaciones que tenemos corriendo
//pm2 logs      muestra los logs
//pm2 stop nombreArtchivo.js  o pm2 stop idDelArchivo       (el id lo ves en status).