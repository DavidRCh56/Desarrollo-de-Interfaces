//crea un array que intercale dos arrays dados.
//por ejemplo dados [a,b,c,d] y [1,2,3,4] el resultado seria [a,1,b,2,c,3,d,4]
//gestionar tambien si un array es mas largo que el otro

const letras = ["a","b","c","d"];
const numeros = [1,2,3,4,5,6,4,3,2];

function intercalarArray(letras,numeros) {
    let arrayIntercalado = [];
    let longitudMaxima = 0;

    //para ver cual de los dos arrays es mas largo
    if(letras.length > numeros.length){
        longitudMaxima = letras.length
    }else{
        longitudMaxima = numeros.length
    }

    for (let i = 0; i < longitudMaxima; i++) {
        if(letras.length > i)
            arrayIntercalado.push(letras[i]);
        if(numeros.length > i)
            arrayIntercalado.push(numeros[i]);
    }
    
    return arrayIntercalado;
}

console.log(intercalarArray(letras,numeros));