//crea un afuncion que determine si una cadena es un palindromo 
//es decir que sea igual al derecho y al reves

const palindromo = "radar";
const noPalindromo = "hola";

function comprobarPalindromo(cadena) {
    let arrayDerecho = [];
    let arrayReves = [];
    const longitud = cadena.length;

    // combierto la cadena en array para darle la vuelta mas facil
    for (let i = 0; i < cadena.length; i++) {
        arrayDerecho.push(cadena[i]);
    }

    //le doy la vuelta al array creado
    for (let i = arrayDerecho.length - 1; i >= 0; i--) {
        arrayReves.push(arrayDerecho[i]);
    }
    
    //muestro los arrays
    console.log(arrayDerecho);
    console.log(arrayReves);

    //recorre el array hasta que encuentre un valor distinto, si lo encuentra da false dando a entender que no es palindromo
    for (let j = 0; j < longitud; j++) {
        if(arrayDerecho[j] !== arrayReves[j])
            return false;
    }
    return true;
}

console.log(comprobarPalindromo(palindromo));
console.log(comprobarPalindromo(noPalindromo));

/*
OTRA SOLUCION


function esPalindromo(cadena){
    const tam = cadena.length
    for(let i = 0; i<parseInt(tam / 2); i++){
        if(cadena[i] !== cadena[tam-i-1])
            return false;
        }
    return true;
}
*/