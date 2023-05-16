function obtenerMayor(num1, num2) {
    // Retorna el número mayor entre num1 y num2.
    // Tu código:
    if (num1 > num2) {
        return num1;
    } else 
    return num2;
 };

function esDivisible(num, divisor) {
    // Retorna true si num es divisible por divisor.
    // De lo contrario, retorna false.
    // Tu código:
    if (num % divisor === 0) {
        return true;
    } else {
        return false;
    }

};

function celsiusToFahrenheit(gradosCelsius) {
    // Convierte grados Celsius a grados Fahrenheit.
    // La fórmula de conversión es: F = (C * 9/5) + 32
    // Tu código:
    var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    return gradosFahrenheit;
};

function obtenerPromedio(num1, num2, num3) {
    // Retorna el promedio de los tres números.
    // Tu código:
    var promedio = (num1 + num2 + num3) / 3;
    return promedio;
}
 