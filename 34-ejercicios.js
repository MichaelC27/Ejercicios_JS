// Calcula los ingresos anuales totales de la persona a partir del siguiente texto.
//  'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.

let texto =
  "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";

const pattern = /\d+/g;
let sueldos = texto.match(pattern);
let ingreso = sueldos.reduce((accumulator, currentValue) => {
  return accumulator + Number(currentValue);
}, 0);
// console.log(`el ingreso anual es de: ${ingreso}`);

// La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa,
// 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.

let points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];

// Convierte los strings en números y ordénalos
let newpoints = points.map(Number).sort((a, b) => a - b);

// Encuentra el valor más pequeño y el más grande
let minPoint = newpoints[0]; // El primer elemento es el más pequeño
let maxPoint = newpoints[newpoints.length - 1]; // El último es el más grande

// Calcula la distancia entre los extremos
let distance = maxPoint - minPoint;

// console.log(`Distancia entre las partículas más lejanas: ${distance}`); // Muestra la distancia
function is_valid_variable(vari) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/; // Expresión regular para variables
  const result = pattern.test(vari); // Verifica si 'vari' es una variable válida
  return result; // Devuelve el resultado
}

// Pruebas
console.log(is_valid_variable("first_name")); // true
console.log(is_valid_variable("first-name")); // false
console.log(is_valid_variable("1first_name")); // false
console.log(is_valid_variable("firstname")); // true

// Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
// console.log(cleanText(sentence));
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
// 2. Escriba una función que encuentre las palabras más frecuentes. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

function cleanText(text) {
  return text.replace(/[%@#&;$.,!?]/g, "");
}
function mostFrequentWords(text) {
  let arrayText = text.split(" ");
  let cantWords = {};
  arrayText.forEach((elemet) => {
    cantWords[elemet] = (cantWords[elemet] || 0) + 1;
  });
  console.log(cantWords);
  const mostWords = Object.entries(cantWords)
    .map(([Word, count]) => ({
      Word: Word,
      count,
    }))
    .sort((a, b) => b.count - a.count) // Ordenar por frecuencia
    .slice(0, 3); // Tomar las 3 palabras más frecuentes
  return mostWords;
}

console.log(mostFrequentWords(cleanText(sentence)))
