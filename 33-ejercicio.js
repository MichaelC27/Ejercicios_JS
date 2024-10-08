// Ejercicios: Nivel 3
// Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
// Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// console.log(name, skills, jsScore, reactScore);
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
// Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];

// console.log(convertArrayToObject(students))[
//   ({
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   })
// ];
// Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente ?
// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
// const student = {
//   name: "David",
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: "HTML", level: 10 },
//       { skill: "CSS", level: 8 },
//       { skill: "JS", level: 8 },
//       { skill: "React", level: 9 },
//     ],
//     backEnd: [
//       { skill: "Node", level: 7 },
//       { skill: "GraphQL", level: 8 },
//     ],
//     dataBase: [{ skill: "MongoDB", level: 7.5 }],
//     dataScience: ["Python", "R", "D3.js"],
//   },
// };
// La salida del objeto copiado debería tener este aspecto:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

import { Countries } from "../countries/countries_data.js";

// Uso de la función
let countries = Countries.getAllCountries();

function contries (countri){
    for (const {name,capital,languages,population} of countri) {
        console.log(`Nombre: ${name} , Capital: ${capital}, Idiomas: ${languages}, Población: ${population}`)
    }
}

//contries(countries)

// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [name, skills, [,,jsScore, reactScore]] = student
// console.log(name, skills, jsScore, reactScore);


const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ];
  
  function convertArrayToObject(students) {
    let studentObjects = []; // Array para almacenar los objetos de estudiantes
    students.forEach(element => {
      let [name, skills, scores] = element;
      // Crear un objeto para cada estudiante
      let student = { name, skills, scores };
      // Añadir el objeto al array
      studentObjects.push(student);
    });
    return studentObjects;
  }
  const student = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
  };
  
  // Crear una copia profunda del objeto student
  const newStudent = {
    ...student, // Copiamos las propiedades de nivel superior
    skills: {
      ...student.skills, // Copiamos el objeto skills
      frontEnd: [
        ...student.skills.frontEnd, // Copiamos las habilidades de frontEnd
        { skill: "Bootstrap", level: 8 }, // Añadimos Bootstrap con nivel 8
      ],
      backEnd: [
        ...student.skills.backEnd, // Copiamos las habilidades de backEnd
        { skill: "Express", level: 9 }, // Añadimos Express con nivel 9
      ],
      dataBase: [
        ...student.skills.dataBase, // Copiamos las habilidades de dataBase
        { skill: "SQL", level: 8 }, // Añadimos SQL con nivel 8
      ],
      dataScience: [
        ...student.skills.dataScience, // Copiamos las habilidades de dataScience
        "SQL", // Añadimos SQL sin nivel
      ],
    },
  };
  
  console.log(newStudent);
  