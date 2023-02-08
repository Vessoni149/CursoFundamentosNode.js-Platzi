function hola(nombre, callback){
  setTimeout(function(){
    console.log("hola " + nombre);
    callback(nombre);
  }, 1000);
}

function hablar(callbackHablar){
  setTimeout(function(){
    console.log("blabla");
    callbackHablar();
  }, 1000)
}

function adios (nombre, otroCallback){
  setTimeout(function (){
    console.log("adios ", nombre)
    otroCallback();
  }, 1000);
}

// --
console.log("iniciando proceso")
hola("Carlos", function(nombre){
  hablar(function (){
    hablar(function(){
      adios(nombre, function(){
      console.log("terminando proceso")
    })})
  })
}); 
//este es el callback hell, se va creando un abrbol gigante de callbacks.
//para evitarlo surgieron las promesas


