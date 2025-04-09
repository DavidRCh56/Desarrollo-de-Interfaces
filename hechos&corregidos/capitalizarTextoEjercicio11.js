//pdf1 javaScript pg101: 1-15
//3. Crea una función que capitalice una cadena de texto. 
//Es decir que todas las palabras empiecen por mayúscula.

const texto = "esto es un ejemplo sin capitalizar";

function capitalizarTexto(texto) {
    let resultado = "";
    let espacio = true;

    for (const n of texto) {
        const letra = n;

        //si la variable espacio esta en true y 
        //n no es un espacio hacemos la letra mayuscula
        if (espacio && letra !== " ") {
            resultado += letra.toUpperCase();
            //hacemos la variable false para que solo la 
            //primera letra de la palabra se haga mayuscula
            espacio = false;
        } else {
            //avanza al siguiente caracter de la cadena
            resultado += letra;
        }
        //si el caracter al que se ha avanzado es un espacio
        //la variable espacio se hace true para que 
        //cuando vuelva a avanzar la primera letra se haga mayuscula
        if (letra === " ") {
            espacio = true;
        }
    }
    console.log("Ejemplo capitalizado: ")
    return resultado;
}

console.log(texto);
console.log(capitalizarTexto(texto));