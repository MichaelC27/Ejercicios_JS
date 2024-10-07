// Encontrar el número mayor en un array

// Escribe una función que reciba un array de números y devuelva el mayor número.

let arreglo = [2, 4, 34, 123, 100, 123, 2, 230, 1042];

let mayor = (arre) => {
  let num = 0;
  for (const element of arre) {
    if (element > num) {
      num = element;
    }
  }
  return num;
};

console.log(mayor(arreglo));
