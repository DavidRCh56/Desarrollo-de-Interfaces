//obtener el numero mayor y menor de un array
const array = [20,5,50,100,77,89,205];

function numeroMayorMenor(array) {
    let mayor = array[0];
    let menor = array[0];
    for (const n of array) {
        if(mayor < n)
            mayor = n;
        if(menor > n)
            menor = n;
    }
    return [menor, mayor];
}
console.log(numeroMayorMenor(array))