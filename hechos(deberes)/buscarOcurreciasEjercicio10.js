//crea una funcion que busque todas las ocurrencias de una palabra en un texto dado 
//la funcion retorna un array con las posiciones encontradas.

const cadena = "Esto es una prueba. La prueba salió bien.";
const busqueda = "prueba";

function buscarOcurrecias(cadena,busqueda){
    let contador = 0;
    let arraypalabras= [];
    let palabra = "";
    let posiciones = [];

    for (const n of cadena) {
        if(n !== " "){
            palabra += n;
        }else{
            if (palabra !== "" || palabra !== " ") {
                arraypalabras.push(palabra);
            }
            palabra = "";
        }
    }
    
    /*for (const m of arraypalabras) {
        if(m === busqueda){
            contador++;
            posiciones.push(m);
        }
    }*/

    for (let i = 0; i < arraypalabras.length; i++) {
        if(arraypalabras[i] === busqueda){
            contador++;
            posiciones.push(i + 1);
        }
    }
    console.log(arraypalabras)
    console.log(posiciones)
    return contador;
}

console.log(buscarOcurrecias(cadena,busqueda));

/**
function buscar(texto,termino){
    let j;
    const posiciones = []
    for (let i = 0; i < texto.length - termino.length; i++) {
        j=0;
        for (let j = 0; j < termino.length; j++) {
            if(texto[i+j] !== termino[j]){
                break;
            }
        }
        if (j === termino.length) {
            posiciones.push(termino);
        }
    }
    return posiciones;
}

console.log(buscar(cadena,busqueda));
 */
