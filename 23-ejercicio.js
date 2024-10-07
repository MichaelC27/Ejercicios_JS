// // Aplanar un array

// // Crea una función que tome un array que contiene arrays anidados y devuelva un array plano (sin anidaciones).
// let arrayAnidado = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];

// let array = (arra) => {
//   let nuevo = [...arra.join("")];
//   return [nuevo.filter((coma) => coma != ",")]
// };
// console.log(array(arrayAnidado))

//FORMA CORRRECTA
let arrayAnidado = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  
  // Usando flat() para aplanar el array
  let array = (arra) => {
    return arra.flat();
  };
  
  console.log(array(arrayAnidado));
  