//Existen tres tipos de operadores lógicos: la negación o NOT, la conjunción o AND, y la disyunción u OR. 

function mayorYMenor (num) {
    if(num > 5 && num < 10 && num % 2 === 0) console.log(true); //&& Es el operador "y"
    else console.log(false);
};

mayorYMenor(2); // Solo tiene una sola condición
mayorYMenor(7); // Una condicion no cumple
mayorYMenor(8); // Las tres condiciones se cumplen


// function mayorYMenor (num) {
//     if(num > 5 && num < 10) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(mayorYMenor(2));
// console.log(mayorYMenor(7));

// --------------------------------------------------------------------

function operadorOr(str) {
    if(str === "Henry" || str.length < 2) console.log(true); // || o 'or' es el operador "o"
    else console.log(false);
};

operadorOr("Henry"); //Si cumple con la condición 1
operadorOr("H"); //Si cumple con la condición 2
operadorOr("Javascript"); //No cumple con la palabra "Henry"



// function negacion(permiso) {
//     if(permiso === true) console.log("Tiene permiso") 
//     else console.log("No tiene permiso");

// };

// negacion(true);
// negacion(false);

function negacion(permiso) {
    if(permiso !== true) console.log("Tiene permiso");

};

negacion(false);

function condicionCompleja(num) {
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);