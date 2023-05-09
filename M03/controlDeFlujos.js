//Metodo 1
function viajar (destino) {
    if (destino === "Brasil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("Gire a la DERECHA");
    } else {
        console.log("Nos perdimos");
    }
}


function puedeManejar (edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Pero eres menor de edad");
    }
}

viajar("Argentina");
puedeManejar(25)

// //Metodo 2
// var brasil = "Gire a la IZQUIERDA";
// var argentina = "Gire a la DERECHA";

// function viajar (destino) {
//     if (destino === brasil) {
//         return brasil;
//     } else if (destino === "Argentina") {
//         console.log("Gire a la DERECHA");
//     } else {
//         console.log("Nos perdimos")
//     }
// }

// console.log(viajar(brasil));
