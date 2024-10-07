// Suma de valores de un mapa

// Crea un mapa con pares clave-valor numéricos y escribe una función que sume todos los valores.

myMap = new Map([
  ["1", 1],
  ["2", 2],
  ["3", 100],
]);
let suma = (myMap) => {
    let sumar = 0
  myMap.forEach((value) => {
    sumar += value
  });
  return sumar
};

console.log(suma(myMap));
