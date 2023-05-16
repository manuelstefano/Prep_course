function obtenerPromedio(notasCursos, notaExamenFinal) {
    // Calcula el promedio de los cursos considerando que representa el 40% y el examen final representa el 60%.
    // Tu código:
    let promedioCursos = obtenerPromedioSimple(notasCursos);
    let promedioFinal = notaExamenFinal;
    
    let promedio = (promedioCursos * 0.4) + (promedioFinal * 0.6);
    return Math.ceil(promedio); // Redondeo con Math.ceil(). Esta función redondea hacia arriba al número entero más cercano.
}

function obtenerPromedioSimple(notas) {
    // Retorna el promedio simple de un conjunto de notas.
    // Tu código:
    let sumatoria = 0;
    for (let i = 0; i < notas.length; i++) {
        sumatoria += notas[i];
    }
    let promedio = sumatoria / notas.length;
    return promedio;
}

let notasCursos = [11, 14, 8, 20, 16]; // Ejemplo con 5 notas de cursos
let notaExamenFinal = 18; // Ejemplo de nota del examen final
let promedio = obtenerPromedio(notasCursos, notaExamenFinal);
console.log("Tu promedio de cursos + examen final es: " + promedio);

function estado(promedio) {
    if (promedio >= 11) {
        return "Aprobaste el curso";
    } else {
        return "Desaprobaste el curso";
    }
}

let estadoCurso = estado(promedio);
console.log(estadoCurso);
