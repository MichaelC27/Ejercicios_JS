const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
// Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
// Desestructurar el objeto rectángulo por sus propiedades o keys.
// Ejercicios: Nivel 2
// Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
// Encuentra las personas que tienen menos de dos habilidades

let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravedad, humanBodyTemp, waterBoilingTemp)
let [fin, est, sw, den, nor]=countries
console.log(fin, est, sw, den, nor)
let {width,height,area,perimeter}=rectangle 
console.log(width,height,area,perimeter)

function usersList(user){
    for (const {name,scores,skills,age} of user) {
        console.log(name,scores,skills,age)
    }
}

usersList(users)

function usersSkils(user){
    for (const {name,scores,skills,age} of user) {
        if(skills.length<2)
        console.log(name,scores,skills,age)
    }
}

usersSkils(users)