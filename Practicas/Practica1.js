//function: La palabra clave function se utiliza para declarar una función llamada edad. La función toma un parámetro llamado num que representa la edad. Dentro de la función, se realiza una evaluación condicional para determinar si la edad es mayor a 18.
// if y else: Estas son estructuras de control condicional. El bloque de código dentro del if se ejecuta si la condición num > 18 es verdadera, lo que significa que la edad es mayor a 18. El bloque de código dentro del else se ejecuta si la condición es falsa, es decir, la edad es igual o menor a 18.
// return: La declaración return se utiliza para devolver un valor desde la función. En este caso, si la edad es mayor a 18, se devuelve la cadena de texto "mayor". Si la edad es igual o menor a 18, se devuelve la cadena de texto "menor". El valor devuelto por la función se asigna a la variable edadTexto.

// typeof es un operador en JavaScript que se utiliza para determinar el tipo de datos de una expresión. Devuelve una cadena que representa el tipo de dato de la expresión.
function edad(num) {
    if (typeof num !== "number" || num < 0 || typeof num === "string") {
      return "incorrecto";
    } else if (num >= 18) {
      return "mayor";
    } else {
      return "menor";
    }
  }

// En esta línea de código: typeof num !== "number", se verifica si typeof num es diferente de la cadena "number", lo cual significa que num no es un número. Si esta condición se cumple, es decir, num no es un número, se devuelve la cadena de texto "incorrecto".
  
var aviso = edad(18);

switch (aviso) {
case "mayor":
    console.log("Eres mayor de edad");
    break;
case "menor":
    console.log("Eres menor de edad");
    break;
default:
    console.log("Datos incorrectos");
    break;
}
  


