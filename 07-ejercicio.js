let palabra = "Arenera";

const palidromo = (palabra) => {
  let pal=[];
  let num = palabra.length;
  for (const key in palabra) {
    pal[num] = palabra[key]
    num --
  }
  return pal.join('')
};
console.log(palidromo(palabra))
 if(palidromo(palabra).toLowerCase() === palabra.toLowerCase()){
    console.log("La palabra es palindroma")
 }else{
    console.log("La palabra no es palindroma")
 }

//  FORMA OBTIMA 
//  let palabra = "Arenera";

// const esPalindromo = (palabra) => {
//   // Convertimos la palabra a minúsculas para evitar problemas de mayúsculas/minúsculas.
//   let palabraNormalizada = palabra.toLowerCase();
//   // Invertimos la palabra.
//   let palabraInvertida = palabraNormalizada.split('').reverse().join('');
  
//   // Comparamos la palabra original normalizada con la palabra invertida.
//   return palabraNormalizada === palabraInvertida;
// };

// if (esPalindromo(palabra)) {
//     console.log("La palabra es palíndroma");
// } else {
//     console.log("La palabra no es palíndroma");
// }
