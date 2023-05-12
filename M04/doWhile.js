//El bucle do-while es una estructura de control en JavaScript que se utiliza para repetir un bloque de código al menos una vez y luego continuar repitiéndolo mientras se cumpla una determinada condición. A diferencia de los bucles for y while, el bucle do-while ejecuta primero el bloque de código y luego verifica la condición para decidir si se debe repetir o no.

//Estructura
// do {
//     // bloque de código a repetir
//   } while (condición);

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// En este caso, el bloque de código dentro del do se ejecutará una vez, independientemente de la condición. Luego, se verificará la condición (i < 5). Si la condición es verdadera, el bucle se repetirá y el bloque de código se ejecutará nuevamente. El bucle continuará repitiéndose mientras la condición se cumpla. En este ejemplo, se imprimirán los números del 0 al 4.

// Es importante tener en cuenta que, al igual que con otros bucles, es necesario asegurarse de que la condición se vuelva falsa en algún momento para evitar bucles infinitos.

//---------------------------------------------------

// Ejercicio: Gestión de acceso al sistema
// El programa simula el acceso a un sistema mediante un usuario y contraseña.
// Se utilizan valores predefinidos en lugar de solicitar entrada al usuario.
// Se utilizan variables, operadores booleanos, estructuras condicionales (if-else),
// operadores lógicos (AND, OR, NOT), un bucle do-while y una estructura switch.

// Variables
var usuarioValido = "usuario123";
var contraseñaValida = "clave456";
var intentos = 3;
var accesoPermitido = false;

// Valores predefinidos
var usuarioIngresado = "usuario123";
var contraseñaIngresada = "clave456";

// Bucle do-while
do {
  // Verificar si las credenciales son válidas
  if (usuarioIngresado === usuarioValido && contraseñaIngresada === contraseñaValida) {
    accesoPermitido = true;
    console.log("¡Bienvenido al sistema!");
  } else {
    intentos--;
    console.log("Credenciales incorrectas. Te quedan " + intentos + " intento(s).");
  }
} while (!accesoPermitido && intentos > 0);

// Verificar si se agotaron los intentos
if (!accesoPermitido) {
  console.log("Se han agotado los intentos. Acceso denegado.");
} else {
  // Menú de opciones
  console.log("Seleccione una opción:");
  console.log("1. Ver perfil");
  console.log("2. Modificar configuración");
  console.log("3. Cerrar sesión");
  
  var opcion = 2; // Opción seleccionada
  
  // Switch para manejar la opción seleccionada
  switch (opcion) {
    case 1:
      console.log("Mostrando perfil...");
      break;
    case 2:
      console.log("Modificando configuración...");
      break;
    case 3:
      console.log("Cerrando sesión...");
      break;
    default:
      console.log("Opción inválida.");
      break;
  }
}
