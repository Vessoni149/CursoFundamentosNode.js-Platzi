console.log("hola mundo");
let i = 0;


setInterval(function(){
  console.log(i);
  i++;
}, 1000);

console.log("segunda instruccion");
//este codigo ejecuta el "hola mundo", despues la "segunda instruccion" y la operacion asincrona ,el setInterval se ejecuta cuando le corresponde segun el tiempo, no en orden en el que estan escritos. en otros lenguajes como python o java esto no sucede.