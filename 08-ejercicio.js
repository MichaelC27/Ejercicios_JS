let array1 =[2,3,4,5]


let suma = (arreglo1)=>{
    let suma = 0
   for (const element of array1) {
    suma += element
   }
   return suma
}

console.log(suma(array1))

// FORMA MAS OPTIMA

// let array1 = [2, 3, 4, 5];

// let suma = (arreglo) => {
//     return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
// };

// console.log(suma(array1)); // 14
