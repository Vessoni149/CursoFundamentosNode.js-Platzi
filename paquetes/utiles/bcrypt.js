//para generar contraseñas encryptadas.
const bcrypt = require ('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash){
  console.log(hash);
  bcrypt.compare(password, hash, function(err, res){  //esta funcion compureva que la contraseña corresponde con el hash.
    // console.log(err);
    console.log(res);
})
})

//el segundo parametro es la cantidad de veces que se va a ejecutar el algoritmo de hash. Cada vez que se ejecuta el hash, cambia.