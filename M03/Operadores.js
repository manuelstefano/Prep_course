//String
var a = 'Suma: ';
var b = 'Resta: ';
var c = 'Multiplicación: ';
var d = 'División: ';
var e = 'Resto: ';
var f = 'Exponente: ';

//Suma usa el simbolo '+'
console.log(a + '3 + 5 = ' + (3 + 5)); //Recuerda que 'console.log' es para comprobar los resultados.

//Resta usa el simbolo '-'
console.log(b + '14 - 7 = ' + (14 - 7));

//Multiplicacion usa el simbolo '*'
console.log(c + '8 * 6 = ' + (8 * 6));

//División usa el simbolo '/'
console.log(d + '30 / 9 = ' + (30 / 9));

//Modulo o Resto usa el simbolo '%'. Por ejemplo: Sabemos que 95/4 es igual a 23.75, esto se obtiene mediante el diviendo que es 95, el divisor es 4, cociente (La respuesta) es 23 y el resto (Resultado que queremos) es 3.
console.log(e + '95 % 4 = ' + (95 % 4)); // El resto de 95/4 es 3.

//Exponente usa el simbolo '**'
console.log(f + '3 ^ 2 = ' + (3 ** 2));

//-------------------------------------------------------------//
//Precedencia de operadores: Se usa la en orden según la tabla de precedencia de operadores.
console.log('Precendencia de operadores:')
console.log('(3 + 5 * 2 - 8) = ' + (3 + 5 * 2 - 8)); //Primero es 5 * 2 = 10; luego 3 + 10 = 13; y finalmente 13 - 8 = 5.
//En la tabla de precedencia, primero es **, luego *, luego /, luego &, sigue + y por último -. 

console.log('((3 + 5) * 2 - 8) = ' + ((3 + 5) * 2 - 8)); //Primero son ().

// Aprende mas es: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tabla

//String
var nombre = 'Manuel'; //String ejemplo a = 1
var saludo = 'Hola ' + nombre; //String concatenados ejemplo b = 2 + a
console.log(saludo); // Se imprime 2 + a = 2a

console.log((3 + 5) * 2 - 8);
console.log(3 + 5 * 2 - 8);

//Metodo Length: Se utiliza para obtener la longitud de un objeto, generalmente un array o un string.
console.log(nombre.length); // Cuando se utiliza con un string, el método length devuelve el número de caracteres en el string.
let frutas = ["Manzana", "Pera", "Naranja"];
console.log(frutas.length)