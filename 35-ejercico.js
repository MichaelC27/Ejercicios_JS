// Ejercicios Nivel 1
// Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
// Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
// Ejercicios Nivel 2
// Sobrescribir el método que se crea en la clase Animal.

class Animal {
  constructor(nombre, edad, color, piernas) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.piernas = piernas;
  }

  // Método set para actualizar el nombre del animal
  set setAnimal(nombre) {
    this.nombre = nombre; // Asigna el nuevo nombre
  }

  // Método get para obtener el nombre del animal
  get getAnimal() {
    return this.nombre; // Devuelve el nombre
  }

  getInfoAnimal() {
    return `El nombre es ${this.nombre}, la edad ${this.edad} años, el color es ${this.color} y tiene ${this.piernas} piernas`;
  }
}
class perro extends Animal {
  constructor(nombre, edad, color, piernas, comida) {
    super(nombre, edad, color, piernas);
    this.comida = comida;
  }

  getInfoAnimal() {
    return `El nombre es ${this.nombre}, la edad ${this.edad} años, el color es ${this.color} , tiene ${this.piernas} piernas y su comida fovorita es ${this.comida}`;
  }
}
class gato extends Animal {}
// Ejemplo de uso
const objperro = new perro("Firulais", 5, "marrón", 4,"Carne");
const objgato = new gato("Michi", 23, "Azul", 19);
console.log(objperro.getInfoAnimal());
console.log(objgato.getInfoAnimal());
