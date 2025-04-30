const lista = [1,2,3,4]

const [z,xx] = lista;//hace que z=1,xx=2

const [a,b,c,d,e] = lista;//los valores que se salen de la lista hacen que sea undefined

const [h,,i,...resto] = [1,2,3,4,5,6,7,8,9,10]//hace que h=1, i=3 y resto desde 4 incluido
                                                //hasta el final

const dato = ["datos"];
const nombres = [...dato];//hace una copia del array dato 

const datos = [{nombre:"luis", edad:12},{nombre:"david", edad:13}]//array de objetos
//si se usa ...datos para copiar el array de objetos, al cambiar la copia o el 
//array de objetos se cambia en el otro ya que solo ocupa un espacio en la memoria

const objeto = {x:1,y:2,z:3};
objeto.x//y-z para sacarlo del objeto cada cosa

//DESESTRUCTURAR OBJETOS
const {x,y} = objeto;//se saca en variables con nombres personalizados para no 
//llamarlos con el  objeto.x
//tambien se le pueden dar valores por defecto al desestructurar igualando a un valor
//para que en el caso de que el array no tenga esa longitud, pille ese valor por defeto


//PARA DESESTRUCTURAR ARRAYS [] PARA OBJETOS {} 

//FUNCIONES

/*function imprimePersona(persona){
    console.log(persona.nombre);
    console.log(persona.apellidos);
    console.log(persona.ciudad);
}*/

function imprimePersona({nombre,apellidos,ciudad = "cordoba"}){ //si no le metemos ciudad pone cordoba por defecto
    console.log(nombre);
    console.log(apellidos);
    console.log(ciudad);
}

imprimePersona({nombre:"pedro",apellidos:"lopez",ciudad:"jaen"});