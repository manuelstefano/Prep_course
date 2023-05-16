function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var contador = 0; // Inicializamos un contador en 0
    do {
      num += 5; // Aumentamos el valor en 5 en cada iteración
      contador++; // Incrementamos el contador en 1
    } while (contador < 8); // Repetimos el bucle hasta que el contador llegue a 8
    
    return num; // Retornamos el valor final
  };

let resultado = doWhile(1);
console.log(resultado)

// El resultado en la terminal será 41. Esto se debe a que el valor inicial 1 se aumenta en 5 en cada iteración, lo que resulta en 1 + 5*8 = 41 al finalizar las 8 iteraciones.