// Herencia de clases

// Crea una clase Animal con un método hacerSonido(). Luego, crea una subclase Perro que sobreescriba este método para devolver "Guau".

class Animal {
  hacerSonido() {}
}

class Perro extends Animal {
    hacerSonido(){
        console.log("Guau")
    }
}

let perro = new Perro()

perro.hacerSonido()