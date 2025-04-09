//pdf1 javaScript pg101: 1-15
//4. Dado un array de cadenas y una longitud n, 
//crea una función que filtre el array dejando solo las
//cadenas de menor longitud que n.

const cadenas = ["1234", "123", "1", "12345678", "12345", "123456"];
const longitudMaxima = 5;

function filtrarCadenas(cadenas, longitudMaxima) {
    let cadenasMenores = [];

    for (const n of cadenas) {
        //pillo la longitud que tiene la cadena en la que se encuentra el bucle
        let longitudCadena = n.length;

        //comparo el valor de la longitud de la cadena con el valor 
        //de la longitud MAX y si la long de la cadena es menor se
        //añade a otro array que recogera estos elementos.
        if (longitudCadena < longitudMaxima) {
            cadenasMenores.push(n);
        }
    }
    console.log("Longitud MAX: " + longitudMaxima);
    return cadenasMenores;
}

console.log(filtrarCadenas(cadenas, longitudMaxima));