// Contar palabras en un texto

// // Escribe una función que reciba un texto largo y devuelva la palabra que más se repite.
// let texto ="perro gato pájaro pez ratón gato pez perro pájaro gato perro ratón pez pájaro gato pez perro gato ratón perro perro";

// let rep = (text) => {
//   let mayorCant= 0
//   let palabraCant = ""
//   let tex = text.split(" ");
//   let palabras = new Set(tex);
//   for (const palabra of palabras) {
//     let contador = 0
//     for (let i = 0; i < tex.length; i++) {
//         if (tex[i] === palabra) {
//             contador++;
//         }
//     }
//     if(mayorCant < contador){
//         mayorCant = contador
//         palabraCant = palabra
//     }
// }
// console.log(`La palabra '${palabraCant}' en la que repite mas con una canidad de ${mayorCant} veces`)
// };

// rep(texto);

// FORMA OPTIMA

// Contar palabras en un texto

// Escribe una función que reciba un texto largo y devuelva la palabra que más se repite.
let texto = "perro gato pájaro pez ratón gato pez perro pájaro gato perro ratón pez pájaro gato pez perro gato ratón perro perro";

let rep = (text) => {
  let contador = {};
  let mayorCant = 0;
  let palabraCant = "";
  
  // Dividir el texto en palabras
  let palabras = text.split(" ");

  // Contar ocurrencias de cada palabra
  for (const palabra of palabras) {
    console.log(contador[palabra] + "°||°"+palabra )
    contador[palabra] = (contador[palabra] || 0) + 1;  // Incrementar el contador para la palabra
  }
console.log(contador)
  // Encontrar la palabra que más se repite
  for (const palabra in contador) {
    if (contador[palabra] > mayorCant) {
      mayorCant = contador[palabra];
      palabraCant = palabra;
    }
  }

  console.log(`La palabra '${palabraCant}' es la que más se repite con una cantidad de ${mayorCant} veces.`);
};

rep(texto);
