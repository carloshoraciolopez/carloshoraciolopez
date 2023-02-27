/*
dado el vector: [10,20,15,5,25]
-determinar el máximo 
-el mimimo
-indice el minimo
-indice del maximo
-promedio
*/

const vector = [10,58,11,59];

//defino el maximo
let idxMaximo;
let idxMinimo;
let acum;
//recorro el vector
if(vector.length >= 1) {
    idxMaximo = 0;
    idxMinimo = 0;
    acum = vector[0];
}
for(let i=1;i < vector.length;i++ ) {
    //maximo, determino su posicion
    if(vector[i] > vector[idxMaximo]) {
        idxMaximo = i;
    }
    //minimo
    if(vector[i] < vector[idxMinimo]) {
        idxMinimo = i;
    }
    //acumular
    acum = acum + vector[i];
}


//promedio  = suma / cantidad
if(vector.length > 0) {
    console.log('maximo', vector[idxMaximo]);
    console.log('minimo', vector[idxMinimo]);
    console.log('promedio',acum / vector.length);
}else{
    console.log('promedio','no hay elementos para evular');
}

/*string */
/*boolean */
/*number */
/*
    objetos: 
    etc..
*/

//creo un objeto con 3 atributos
const obj = {
    nombre: 'daniel',
    edad: 38,
};
const obj2 = {
    nombre: 'hola',
    edad: 15,
};
const obj3 = {
    nombre: 'Alejandra',
    edad: 33,
};

//creo un ARRAY CON UN objeto dentro
const miArrayRaro = [obj,obj2,obj3]; // mal!!!

// ingresar la cantidad de alumnos por pantalla
// cargar los datos nombre y edad de cada uno
// al finalizar calcular:
// la edad maxima
// mostrar el nombre

//ingreso cantidad maxima
const cant = prompt('ingrese la cantidad de alumnos');

//creo la lista de alumnos vacia
const alumnos = [];

//cargar uso el for
let nombre;
let edad;
for(let i=0;i < parseInt(cant);i++ ) {
     nombre = prompt('Nombre:');
     edad = prompt('Edad:'); //es de tipo string
     //dejar las validaciones para despues!!

    //agrego un elemento a un array, AL FINAL
    alumnos.push(
        {
            edad: parseInt(edad), //parseInt() viene de fabrica
            nombre: nombre
        }
    );
}

//procesar
let objMax;// asumo que 0 es la posicion de maximo
if(alumnos.length >0) {
    objMax = alumnos[0];
}

for(let i=1;i < alumnos.length;i++ ) {
    const aux = alumnos[i];
    if(aux.edad > objMax.edad ) {
        objMax = alumnos[i];
    }
}

console.log(objMax); //muestra todo 