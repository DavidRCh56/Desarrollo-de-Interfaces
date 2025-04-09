const lista = [1,2,3,4,5,6,7,8,9,10];

function sumador(lista){
    let suma = 0
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

console.log(sumador(lista))


//generar un array del 1 al 200
function generarArray(num){ //num=200 hace que el valor por defecto 
                            // en el caso de que no se le introduzca valor sea 200
    
    let nuevoArray = [];
    for (let i = 0; i <= num; i++) {
        nuevoArray.push(i);
    }
    return nuevoArray;
}

console.log(generarArray(200));

console.log(sumador(generarArray(200)));

//array aleatorio
function crearArrayAleatorio(){
    let arrayAleatorio = []
    for (let i = 0; i < 200; i++) {
        numeroAleatorio =parseInt(Math.random() * 200);//con esto va de 0 a 200
        arrayAleatorio.push(numeroAleatorio);
    }
    return arrayAleatorio;
}
console.log(crearArrayAleatorio());
console.log(sumador(crearArrayAleatorio()))
