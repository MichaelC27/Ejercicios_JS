// Manejo de errores: Calculadora segura

// Crea una función dividir(a, b) que divida a entre b. Si b es 0, lanza un error con el mensaje "No se puede dividir por 0".

let dividir = (a, b) => {
  if (b == 0) {
    throw new Error("No se puede dividir por 0");
  } else {
    return a / b;
  }
};

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.log(`${error}`);
}
