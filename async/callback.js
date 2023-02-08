function hola(nombre, callback){
  setTimeout(function(){
    console.log("hola " + nombre);
    callback();
  }, 1000);
}
function adios (nombre, otroCallback){
  setTimeout(function (){
    console.log("adios " + nombre)
    otroCallback();
  }, 1000);
}

console.log("iniciando proceso")
hola("Carlos", function(){
  adios("Carlos2", function(){
    console.log("terminando proceso")
  })
  
}); 





