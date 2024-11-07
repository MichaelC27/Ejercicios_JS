const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// const newSkills = JSON.stringify(skills,undefined,1)
// console.log(newSkills)

// const NewisMarried = JSON.stringify(isMarried,undefined,4)
// console.log(NewisMarried)

// const NewStudent = JSON.stringify(student,undefined,4)
// console.log(NewStudent)




// const  NewStudent2 = JSON.stringify(student, ["firstName","lastName","skills"],4)
// console.log(NewStudent2)
// Parseamos la cadena JSON
const users = JSON.parse(txt);

// Inicializamos variables para almacenar el usuario con más habilidades
let maxSkillsUser = null;
let maxSkillsCount = 0;

// Recorremos el objeto de usuarios
for (const user in users) {
    const skillsCount = users[user].skills.length; // Contamos las habilidades del usuario
    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount; // Actualizamos el conteo máximo
        maxSkillsUser = users[user]; // Actualizamos el usuario con más habilidades
    }
}

// Imprimimos el usuario con más habilidades
console.log(maxSkillsUser);
