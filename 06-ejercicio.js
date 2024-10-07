let palabra = "El amanecera"
let vocales = ['a','e','i','o','u']
let cant =0 
let canti = (palabra,vocales)=>{
    for (const key in palabra) {
       for (const key2 in vocales) {
            if(palabra[key] ==vocales[key2]){
                cant ++
            }
       } 
    }
    return cant
}

console.log(canti(palabra,vocales))

// Solucion optima
// let palabra = "El amanecerá";
// let vocales = ['a', 'e', 'i', 'o', 'u'];

// let contarVocales = (palabra, vocales) => {
//     let cant = 0;
//     for (let letra of palabra.toLowerCase()) {
//         if (vocales.includes(letra)) {
//             cant++;
//         }
//     }
//     return cant;
// };

// console.log(contarVocales(palabra, vocales));
// ;
