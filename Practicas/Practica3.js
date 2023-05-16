let num1 = 11;
let num2 = 8;
let num3 = 8;
let num4 = 8;

// function obtenerPromedio() {
//     // Retorna el promedio de los 4 números.
//     // Tu código:
//     var promedio = (num1 + num2 + num3 + num4) / 4;
//     return promedio;
// };

// let resultadoPromedio = obtenerPromedio(num1, num2, num3, num4);
// console.log("Tu promedio es: " + resultadoPromedio);


function obtenerPromedio(num1, num2, num3, num4) {
    // Retorna el promedio de los 4 números.
    // Tu código:
    let promedio = (num1 + num2 + num3 + num4) / 4;
    return Math.ceil(promedio); //Redondeo con Math.ceil(). Esta función redondea hacia arriba al número entero más cercano.
}

let promedio = obtenerPromedio(num1, num2, num3, num4);
console.log("Tu promedio es: " + promedio);

function estado(promedio) {
    if (promedio >= 11) {
        return "Aprobaste el curso";
    } else {
        return "Desaprobaste el curso";
    }
}

let estadoCurso = estado(promedio);
console.log(estadoCurso);