//crea una funcion que rote los elementos de un array n posiciones
//por ejemplo dado el array 1,2,3,4,5,6 y el numero 2, el resultado sera:
//[5,6,1,2,3,4] es decir pensando en un circulo, rota hacia la derecha(tener en cuenta %).

/**
 * mi manera de hacerlo es partiendo el array desde el numero que se ha recibido
 * haciendo que haya una parte que es la que empieza a contar desde el valor que
 * se le ha dado al numero teniendo en cuenta que rota a la derecha, es decir,
 * si el numero es 2, el array rotado en este caso empezaria en la longitud
 * total del array principal menos el valor que se le ha dado es decir si 
 * la longitud total es 6 y el numero es 2, empezaria a avanzar recogiendo los valores
 * desde el 4 que traduciendolo a las posiciones del array, coincidiria con el numero 5
 * porque el array siempre empieza a contar las posiciones desde 0.
 * se haria lo mismo pero al reves para obtener el resto de la cadena, 
 * recorriendo desde el principio el array hasta el total del array principal 
 * menos el valor que se le ha dado es decir si la longitud total es 6 
 * y el numero es 2 contaria hasta la posicion 4 del array principal
 * obteniuendo asi los numeros del 1 al 4, teniendo ya estos arrays, solo queda juntar
 * el primero que he dicho con el ultimo que acabo de explicar para obtener el array 
 * ya rotado tal y como se pide en el ejercicio usando el operador Spread
 */

const array = [1,2,3,4,5,6];

function rotarArray(array, numero){
    let arrayFin = [];
    let arrayPrincipio = [];
    let num = numero % array.length;

    //si el resultado entre el numero y la longitud del array da 0 
    //se entiende que da una vuelta completa, haciendo que se quede igual
    if (num === 0) 
        return array;

    for (let i = array.length - num; i < array.length; i++) {
        arrayPrincipio.push(array[i]);
    }
    
    for (let i = 0; i < array.length - num; i++) {
        arrayFin.push(array[i]);
    }
    console.log(arrayPrincipio);
    console.log(arrayFin);

    let arrayRotado = [...arrayPrincipio, ...arrayFin];

    return arrayRotado;
}

console.log(rotarArray(array, 2));
//se podria hacer mas corto usando %