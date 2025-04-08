//pdf1 javaScript pg101: 1-15
//5. Crea una función que cree el acrónimo de una cadena de caracteres 
//tomando la primera letra de cada palabra y convirtiéndola a mayúscula. 
//Por ejemplo la frase anterior sería CUFQCEADU….

const cadena = "esto Es un ejemplo Con. mayusculas Y minusculas, para Crear ACRONIMOS.";

function crearAcronimo(cadena) {
    let acronimo = "";
    let palabra = [];

    for (const n of cadena) {
        let caracter = n; 

        if (caracter !== " ") {
            //añade los caracteres de la palabra completa
            palabra.push(caracter);
        } else {
            //si el caracter que le toca es un espacio, añade a la cadena nueva para el caronimo 
            //el caracter en la posicion 0 del array que se ha ido formando hasta ese espacio, 
            //pasandolo directamente a mayuscula
            if (palabra.length > 0) {
                // Convertir la primera letra de la palabra a mayúscula y agregarla al acrónimo
                acronimo += palabra[0].toUpperCase();
            }
            //reinicio el array para una nueva palabra
            palabra = [];
        }
    }

    //se repite aqui el bucle porque al no terminar la cadena en un espacio, se termina el bucle 
    //dejando la ultima palabra pendiente, si la cadena terminara en espacio esto seria prescindible
    if (palabra.length > 0) {
        acronimo += palabra[0].toUpperCase();
    }

    console.log("Cadena: " + cadena);
    return acronimo;
}

console.log(crearAcronimo(cadena));