// Inversión de cadenas con recursividad

// Escribe una función recursiva que invierta una cadena de texto.

let invertir = (cadena) => {
    // Caso base: si la cadena está vacía o tiene un solo carácter, se devuelve tal cual
    if (cadena.length === 0) {
      return "";
    }
  
    // Recursión: llamar a la función con la cadena sin el primer carácter
    // y luego añadir el primer carácter al final
    return invertir(cadena.slice(1)) + cadena[0];
  };
  
  let palabra = "Mañana";
  console.log(palabra.slice(1)+palabra[0])
  //console.log(invertir(palabra));  // Output: "anañaM"
  