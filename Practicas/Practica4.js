function obtenerPromedio(notas) {
    // Retorna el promedio de las notas ingresadas.
    // Tu código:
    let sumatoria = 0;
    for (let i = 0; i < notas.length; i++) {
        sumatoria += notas[i];
    }
    let promedio = sumatoria / notas.length;
    return Math.ceil(promedio); // Redondeo con Math.ceil(). Esta función redondea hacia arriba al número entero más cercano.
}

let notas = [11, 14, 8, 20, 16]; // Ejemplo con 5 notas
let promedio = obtenerPromedio(notas);
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
