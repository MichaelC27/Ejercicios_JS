// Duplicar los valores en un array

// Escribe una función que duplique cada valor de un array y devuelva un nuevo array.

let arreglo = [2, 4, 5, 6];

let newArreglo = (arre) => {
  let newArre = [];
  for (const element of arre) {
    newArre.push(element, element); // Agregar el elemento dos veces
  }
  return newArre; // Devolver el nuevo array
};

console.log(newArreglo(arreglo)); // Output: [2, 2, 4, 4, 5, 5, 6, 6]




// FORMA OPTIMA
// let arreglo = [2, 4, 5, 6];

// let newArreglo = (arre) => {
//   let newArre = [];
//   for (const element of arre) {
//     newArre.push(element, element); // Agregar el elemento dos veces
//   }
//   return newArre; // Devolver el nuevo array
// };

// console.log(newArreglo(arreglo)); // Output: [2, 2, 4, 4, 5, 5, 6, 6]

