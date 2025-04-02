/*const duplicados = [1,6,8,1,6,10,1,7,0];

function arraySinDuplicados(duplicados){
    sinDuplicados = [];
    for (let i = 0; i < duplicados.length; i++) {
        while (!sinDuplicados.includes(duplicados[i])) {
            sinDuplicados.push(duplicados[i]);
        }
    }
    return sinDuplicados;
}

console.log(arraySinDuplicados(duplicados));*/

//otra vez con bucles distintos sin usar el includes

const duplicados = [1,6,8,1,6,10,1,7,0];

function arraySinDuplicados(duplicados){
    let sinDuplicados = [];
    let encontrado = false;
    for (const i of duplicados) {
        encontrado = false;
        for (const n of sinDuplicados) {
            if (duplicados[i] === n) {
                encontrado = true;
                break;
            }
        }
        if(!encontrado) {
            sinDuplicados.push(duplicados[i]);
        }
    }
    return sinDuplicados;
}

console.log(arraySinDuplicados(duplicados));

/////esta mal