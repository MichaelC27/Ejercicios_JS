// *** Encuentre las 10 lenguas más habladas:

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```

import { Countri } from "../countries/countries_data_old.js";

// Función para encontrar las lenguas más habladas
function mostSpokenLanguages(countries, limit) {
    const languageCount = {};

    // Contar las lenguas
    countries.forEach(country => {
        country.languages.forEach(language => {
         
            languageCount[language] = (languageCount[language] || 0) + 1;
          
        });
    });


    // Convertir el objeto en un array y ordenarlo
    const sortedLanguages = Object.entries(languageCount)
        .map(([language, count]) => ({ language: language, count }))
        .sort((a, b) => b.count - a.count);

    // Devolver las lenguas más habladas hasta el límite especificado
    return sortedLanguages.slice(0, limit);
}

// Uso de la función
let countries = Countri.getAllCountries();

// console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
