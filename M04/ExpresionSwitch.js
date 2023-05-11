// En JavaScript, una expresión switch es una estructura de control que se utiliza para realizar múltiples comprobaciones en una variable o expresión y ejecutar diferentes bloques de código en función del valor coincidente. Es una alternativa a utilizar múltiples sentencias if...else if...else cuando se necesitan tomar decisiones basadas en múltiples casos.
// La estructura básica de una expresión switch es la siguiente:
// switch (expresion) {
//     case valor1:
//       // bloque de código a ejecutar si la expresion coincide con valor1
//       break;
//     case valor2:
//       // bloque de código a ejecutar si la expresion coincide con valor2
//       break;
//     // Más casos...
//     default:
//       // bloque de código a ejecutar si la expresion no coincide con ninguno de los casos anteriores
//       break;
//   }
  
var color = "rojo";

switch (color) {
case "rojo":
    console.log("El color es rojo");
    break;
case "azul":
    console.log("El color es azul");
    break;
case "verde":
    console.log("El color es verde");
    break;
default:
    console.log("El color no es rojo, azul ni verde");
    break;
}
  