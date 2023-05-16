// var arr = [1, 2, 3, 4, 5]; // Declaramos un array con 5 elementos

// // Recorremos el array usando un bucle for
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // Imprimimos en la consola cada elemento del array
// };

// //En resumen, esta línea de código establece una variable i con un valor inicial de 0 y ejecuta el bucle mientras i sea menor que la longitud del array arr. Después de cada iteración, i se incrementa en 1. Esto permite recorrer cada elemento del array en sucesión.

function encontrarLetraP(string) {
    var letras = string.split("");

    for(let i = 0; i < letras.length; i++) {
        if(letras[i] === "p") {
            console.log("Si contiene a P")
        } 
    }
};

encontrarLetraP("JavaScript");
encontrarLetraP("Henry")