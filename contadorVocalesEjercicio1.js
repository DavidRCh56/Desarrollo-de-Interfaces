//funcion que se le pasa la cadena y contar el numero de vocales
/*correccion*/

/*function contarVocales(texto){
    let contador = 0;

    texto = texto.toLowerCase();
    
    for (let i = 0; i < texto.length; i++) {
        
        if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o"
            || texto[i] === "u"
        ) {
            contador++;
        }
        
    }
    return contador;

}

const n = contarVocales("holaaaa");

console.log(n);*/

/*adaptacion con includes*/

function contarVocales(texto){
    let contador = 0;

    const vocales = ["a", "e", "i", "o", "u"]

    texto = texto.toLowerCase();
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
        
    }
    return contador;

}

const n = contarVocales("holaaaa");

console.log(n);
