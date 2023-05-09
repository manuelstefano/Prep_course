//'function' es la palabra reservada
//'sumaTres' es el nombre de la función
//'x' es el argumento o parámetro, sirve para dar información a la función
//La llaves {} es el cuerpo de la función, es donde se indica las intrucción donde se ejecutara la función
// function sumaTres(x) {
//     console.log(x + 3);
// }

// sumaTres(5);

// --------------------------------

// FORMA 1
function sumaTres(x) {
    return x + 3;
};

// FORMA 2
// var sumaTres = function (x) {
//     return x + 3;
// };

// // FORMA 3
// var sumaTres = (x) => {
//     return x + 3;
// }

console.log(sumaTres(10));
var animal = 'Caballo';

//Recuerda que return no es lo mismo que console.log

// Otro ejemplo
function saludar() {
    console.log("¡Hola, bienvenido!");
  }
  
  saludar(); // Llamamos a la función para que imprima el mensaje

//En este caso, hemos definido una función llamada saludar() que simplemente imprime "¡Hola, bienvenido!" en la consola. Luego, para ejecutar la función, la llamamos utilizando el nombre de la función seguido de paréntesis: saludar().

function sumar(a, b) {
    var resultado = a + b;
    console.log("El resultado de la suma es: " + resultado);
  }
  
  sumar(3, 4); // Llamamos a la función sumar() y pasamos los valores 3 y 4 como argumentos

//En este caso, la función sumar(a, b) acepta dos parámetros, a y b. Luego, dentro de la función, realizamos la suma de a y b, y mostramos el resultado en la consola.