const sharp = require('sharp');

sharp('yo.jpg')
.resize(80)
.toFile('resized.jpg')
//sirve para trabajar con imagenes
//estos metodos nos crearon una imagen recortada dentro de la misma carpeta.