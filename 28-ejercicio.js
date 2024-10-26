// *** Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.

// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
import { Countri } from "../countries/countries_data_old.js";

function mostPopulatedCountries(countri,cant){

    let mostCountries ={}
    countri.forEach(countris => {
        mostCountries[countris.name]=countris.population
    });
    console.log(mostCountries)
    const mostPopulated = Object.entries(mostCountries).map(([name,cantidad])=>({
        Pais: name,cantidad
    })).sort((a,b)=>b.cantidad - a.cantidad)
    return mostPopulated.slice(0,cant)
}

// Uso de la función
let countries = Countri.getAllCountries();

console.log(mostPopulatedCountries(countries,2))