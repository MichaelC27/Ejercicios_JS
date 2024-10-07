// let arrgeglo = ["hola",2,"hola",23,23,2,"mañana",7,7,"juves","mañana"]

// let f_arreglo=(array)=>{
//     let filarray = []
//     for (const element of array) {
//         filarray = filarray.filter(ele=>ele != element)
//         filarray.push(element)
//     }
//     return filarray
// }

// console.log(f_arreglo(arrgeglo))

let arreglo = ["hola", 2, "hola", 23, 23, 2, "mañana", 7, 7, "juves", "mañana"];

let mySet = (arreglo) => {return [... new Set(arreglo)]};

console.log(mySet(arreglo))



// let arreglo = ["hola", 2, "hola", 23, 23, 2, "mañana", 7, 7, "juves", "mañana"];

// let f_arreglo = (array) => {
//     let filarray = [];
//     for (const element of array) {
//         // Si el elemento no está ya en filarray, lo agregamos
//         if (!filarray.includes(element)) {
//             filarray.push(element);
//         }
//     }
//     return filarray;
// };

// console.log(f_arreglo(arreglo));
// // Resultado: [ 'hola', 2, 23, 'mañana', 7, 'juves' ]
