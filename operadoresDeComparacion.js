//Operaciones de comparación
console.log('7 > 3 es ' + (7 > 3));
console.log('5 < 1 es ' + (5 < 1));
console.log('3 == 3 es ' + (3 == 3)); //== significa que es igual a...
console.log ('4 == 7 es ' + (4 == 7));
//Recuerda:
//'=' solo se utiliza para asignación, por ejemplo:
//var b = 2;
//'==' solo se utiliza para igualdad, por ejemplo:
//console.log(3 == 3);

//¿Y cual es la diferencia entre igualdad '==' vs igualdad estricta '==='?
console.log('Diferencia entre == vs ===');
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); //Solo verifica que el valor sea el mismo, el algoritmo Abstrac Equality Comparison compara valores aunque este sea distinto en datos.
console.log (3 === "3"); //Coincidir el tipo de dato con valor estrictamente, por lo que number no es igual a string, lo cual es false.

//Asociatividad
console.log('Asociatividad');
var a = 1;
var b = 2;
var c = (a = b);
console.log(a);
console.log(b);
console.log(c);

console.log(16 / 2 / 4)