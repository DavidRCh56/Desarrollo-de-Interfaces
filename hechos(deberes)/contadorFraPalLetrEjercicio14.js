//pdf1 javaScript pg101: 1-15
//6. Crea una función que cuente las frases, palabras y letras presentes en un texto.

const texto = "hola, si. soy david.";

function contarTexto(texto) {
    let contadorFrases = 0;
    let contadorPalabras = 0;
    let contadorLetras = 0;
    let palabra = [];

    for (const n of texto) {
        let caracter = n;

        //si el cararcter no es espacio, punto o coma se añade al array palabra
        if (caracter !== " " && caracter !== "," && caracter !== ".") {
            palabra.push(caracter);
        } else {
            
            //si el caracter es espacio, punto o coma y la longitud del array palabra es mayor a 0 
            //se suma uno al contador de palabras
            if (palabra.length > 0) {
                contadorPalabras++;
                //aprovecho que aqui hay una palabra completa, para añadir la longitud de la misma 
                //al contador de letras para asi contar todas las letras segun las palabras
                contadorLetras += palabra.length;
                //reinicio el array para la siguiente palabra
                palabra = [];
            }

            //suma 1 al contador de frases por cada . que se encuentre
            if (caracter === ".") {
                contadorFrases++;
            }
        }
    }

    console.log("Frases: " + contadorFrases);
    console.log("Palabras: " + contadorPalabras);
    console.log("Letras: " + contadorLetras);
}

contarTexto(texto);