// Ejercicios:Nivel 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
// crear un set vacío
// Crear un set que contenga de 0 a 10 utilizando el bucle
// Eliminar un elemento de set
// Limpia set
// Crear un set de 5 elementos string a partir de un array
// Crear un map de países y el número de caracteres de un país
// Ejercicios:Nivel 2
// Encontrar a unión b
// Encontrar a intersección b
// Encontrar a con b

const mySet = new Set();

for (let index = 0; index <= 10; index++) {
  mySet.add(index);
}
let palabra = "AEIOU"
console.log(mySet);
mySet.delete(2);
console.log(mySet)
mySet.clear();
console.log(mySet);
let mySet2= new Set()
console.log(palabra)
for (let index = 0; index < palabra.length; index++) {
    mySet2.add(palabra[index]);
    
}
console.log(mySet2)
const countriesMap = new Map();

countries.forEach((countri)=>{
    countriesMap.set(countri,countri.length)
})

console.log(countriesMap)
let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C)

let c2 = a.filter((num) => !(B.has(num)))
let interSet = new Set(c2)
console.log(interSet)