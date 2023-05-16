// El método every() es una función integrada en JavaScript que se utiliza en los arrays. Este método verifica si todos los elementos de un array cumplen con una determinada condición especificada en una función de callback. Devuelve true si todos los elementos cumplen la condición y false si al menos uno de los elementos no la cumple.

var numeros = [1, 6, 8, 9];

// Utilizamos el método every() en el array numeros para verificar si todos los elementos cumplen una condición
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});

// Imprimimos el resultado de cumplenCondicion en la consola
console.log(cumplenCondicion); // El resultado será false

// Explicación paso a paso:
// 1. Declaramos el array numeros y le asignamos los valores [1, 6, 8, 9].
// 2. Utilizamos el método every() en el array numeros.
// 3. La función de callback (num) => { return num > 5; } se ejecuta para cada elemento del array.
// 4. Dentro de la función de callback, verificamos si el elemento num es mayor que 5.
// 5. La función de callback devuelve true si la condición se cumple para todos los elementos del array y false si al menos uno de los elementos no cumple la condición.
// 6. El resultado del método every() se asigna a la variable cumplenCondicion.
// 7. Imprimimos el valor de cumplenCondicion en la consola.
