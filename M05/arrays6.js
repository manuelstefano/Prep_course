var palabra = "Henri";
var palabraSeparada = palabra.split(""); // Te ayuda a separar cada letra de la palabra como elementos.

palabraSeparada.pop();
palabraSeparada.push("y");

// console.log(palabraSeparada)
let palabraArreglada = palabraSeparada.join(""); // Te ayuda a unir todos los elementos en una palabra.
console.log(palabraArreglada)