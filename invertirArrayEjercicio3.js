//invertir array
const array = [1,2,3,4,5,6,7,8,9,10];

//recorrer el array de atras a delante
function invertirArray(array){
    let arrayInvertido= [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

console.log(invertirArray(array));