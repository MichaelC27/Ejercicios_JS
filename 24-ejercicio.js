// Suma de dígitos recursiva

// // Escribe una función que tome un número entero y devuelva la suma de sus dígitos de manera recursiva. Ejemplo: 1234 -> 1 + 2 + 3 + 4 = 10.

// let numeros = [1, 2, 3, 4,10,10,10];
// let a = 0;
// let suma = (nume) => {
//   if (nume.length > 0) {
//     a = a + nume[0];
//     suma(nume.slice(1));
//   }
//   return a;
// };
// console.log(suma(numeros));


// FORMA CORRECTA 
let suma = (nume) => {
    if (nume.length === 0) {
      return 0;
    }
    console.log(nume[0]+"||"+nume.slice(1))
    return nume[0] + suma(nume.slice(1));
  };
  
  let numeros = [1, 2, 3, 4, 10, 10, 10];
  console.log(suma(numeros));  // Resultado: 40
  
