const vector = [
    {
        edad: 55,
        nombre: 'carlos',
        empleado: true,
    },
    {
        edad: 75,
        nombre: 'juan',
        empleado: true
    },
    {
        edad: 75,
        nombre: 'analia',
        empleado: false
    }
]

//find() > busca dentro del array
//buscando uno solo
const one = vector.find(x => x.empleado);
console.log(one);

//filter
//filtra y retorna un array
const all = vector.filter(x => x.empleado);
console.log(all);

//quiero saber si todos son empleados
const todosEmpleados = vector.every(x => x.empleado);
console.log(todosEmpleados ? 'todos': 'no todos');

//quiero saber si alguno es mayor de 55
const existe = vector.some(x => x.edad > 75);
console.log(existe ? 'existe': 'no existe');

//quiero todos los nombre que contengan 'an'
const ans = vector.filter(x => x.nombre.includes('an'));
console.log(ans);

//quiero eliminar a juan que es empleado y tiene 75 años
const sinJuan = vector.filter(x=> !(x.nombre === 'juan' && x.empleado && x.edad ===75));
console.log(sinJuan);
