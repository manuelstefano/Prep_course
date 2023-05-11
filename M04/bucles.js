//FOR: Se usa cuando sabemos la cantidad maxima de pasos que queremos ejecutar
var suma = 0;
// suma = suma + 1;
// suma = suma + 2;
// suma = suma + 3;
// suma = suma + 4;

// console.log(suma);

//for (inicialización; condición; incremento) 
for (var i = 0; i  < 10; i++) {
    suma = suma + 1;
    console.log('Variable de iteración', i);
};

console.log('Variable sumar: ', suma);

//WHILE: No sabemos la cantidad maxima de pasos hasta finalizar la ejecución
var i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
//En este caso, el bucle while se repetirá siempre que la variable i sea menor a 5. Al igual que en el bucle for, se imprimirán los números del 0 al 4.