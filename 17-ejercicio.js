// Contar propiedades de un objeto

// Escribe una función que reciba un objeto y devuelva cuántas propiedades tiene.

let person = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
};

let cant = (per) => {
  let cont = 0;
  for (const key in per) {
    cont++;
  }
  return cont;
};

//console.log(cant(person));

// FORMA OPTIMA
// let person = {
//     name: "Brais",
//     age: 37,
//     alias: "MoureDev",
//   };
  
//   let cant = (per) => {
//     return Object.keys(per).length; // Devuelve la cantidad de claves
//   };
  
//   console.log(cant(person)); // Output: 3
  