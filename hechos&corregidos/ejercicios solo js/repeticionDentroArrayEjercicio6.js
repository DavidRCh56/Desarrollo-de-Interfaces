//crea una funcion que debe retornar verdaderi si alguno de los elementos
//de un array esta repetido n veces

const numeros = [1,1,1,2,6,10,20,1,6,2,10,20,8];

function repetido(numeros,repeticiones) {
    for (const n of numeros) {
        let contador = 0;
        for (const m of numeros) {
            if (m === n) {
                contador++
            }
        }
        if(contador === repeticiones)
            return true;
    }
    return false;
}

console.log(repetido(numeros,4));