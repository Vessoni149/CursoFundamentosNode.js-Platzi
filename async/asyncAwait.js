async function hola(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("hola "+ nombre);
      resolve(nombre);
    }, 1000);
  });
  
}

async function hablar(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("blabla");
      resolve(nombre);
      reject('hay un error');
  }, 1000)})
}

async function adios (nombre){
  return new Promise((resolve,reject) =>{
    setTimeout(function (){
      console.log("adios ", nombre)
      resolve();
    }, 1000);
  })
}
async function main(){
  let nombre = await hola('carlos');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}
main();
console.log("empezando proceso");