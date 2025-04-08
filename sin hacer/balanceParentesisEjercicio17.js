//pdf1 javaScript pg101: 1-15
//13. Crea una función que determine si los paréntesis presentes en una cadena de texto están balanceados. 
//Por ejemplo (a(b)) → Balanceado, (a(b(a)) → No balanceado.

const cadenaBien = "(a(b))";
const cadenaMal = "(a(b(a))";

function comprobarBalance(cadena) {
    let contadorUno = 0;
    let contadorDos = 0;

    for (let n of cadena) {
        if (n === "(") {
            contadorUno++;
        }
        if (n === ")") {
            contadorDos++;
        }
    }

    console.log(cadena);

    if (contadorUno === contadorDos) {
        return "Balanceado";
    } else {
        return "No balanceado";
    }
}

console.log(comprobarBalance(cadenaBien));
console.log(comprobarBalance(cadenaMal));