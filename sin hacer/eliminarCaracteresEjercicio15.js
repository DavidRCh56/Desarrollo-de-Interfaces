//pdf1 javaScript pg101: 1-15
//11. Crea una función que elimine de una cadena los caracteres dados en un array.

const cadena = "Hola, ¿cómo estás?";
const caracteres = [",", "¿", "?", " "];

function eliminarCaracteres(cadena, caracteres) {
    let arraySinCaracteres = "";

    for (let n of cadena) {
        //lo hago con un boolean para evitar errores, porque si hago que se añada cuando sea distinto sale mal
        let eliminar = false;

        for (let m of caracteres) {
            if (n === m) {
                eliminar = true;
                break;
            }
        }

        if (!eliminar) {
            arraySinCaracteres += n;
        }
    }

    return arraySinCaracteres;
}

console.log(eliminarCaracteres(cadena, caracteres));