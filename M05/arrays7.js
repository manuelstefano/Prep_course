var numeros = [1, 2, 3, 4];
// El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
// numeros.forEach((num) => console.log(num)); //Lo que hace es imprimir en la terminal cada numero de forma individual

// numeros.forEach((num) => {
//     if (num === 3) {
//         console.log(num);
//     }
// });

// El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var masUno = numeros.map((num) => {
    return num + 1;
});

console.log(masUno);

// Encuentra mas metodos en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array