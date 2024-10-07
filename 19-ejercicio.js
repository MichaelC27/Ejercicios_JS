// Desestructuración de objetos

// Escribe una función que reciba un objeto con propiedades nombre, edad, ocupación y use la desestructuración para acceder a esos valores.

let persona ={
    Nombre:"Alan",
    Edad:89,
    Ocupacion:"Perro"
}

let{Nombre:nombre,Edad:edad,Ocupacion:ocupacion} = persona
console.log(nombre)
console.log(edad)
console.log(ocupacion)