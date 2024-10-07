// Crear un objeto persona

// Crea una clase Persona con propiedades nombre, edad y un método que imprima una presentación como "Hola, me llamo Juan y tengo 25 años".

class persona {
  constructor(nombre, edad) {
    this.edad = edad;
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
  }
}

per = new persona("Michael",59)

per.saludar()