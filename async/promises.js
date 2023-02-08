//Las promesas son una clase global que puede ser llamada en cualquier momento.

function hola(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("hola "+ nombre);
      resolve(nombre);
    }, 1000);
  });
  
}

function hablar(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("blabla");
      // resolve(nombre);
      reject('hay un error');
  }, 1000)})
}

function adios (nombre){
  return new Promise((resolve,reject) =>{
    setTimeout(function (){
      console.log("adios ", nombre)
      resolve();
    }, 1000);
  })
}

//--
console.log('iniciando el proceso...')
hola('carlos')
  .then(hablar)
  .then(adios)
  .then((nombre) => {
  console.log('terminado el proceso')
}).catch(error => {
  console.error('ha habido un error', error)
})