// Ejercicios
// const countriesAPI = "https://restcountries.com/v2/all";
// const catsAPI = "https://api.thecatapi.com/v1/breeds";
// Ejercicios: Nivel 1
// Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.
// Ejercicios: Nivel 2
// Imprime todos los nombres de los gatos en la variable catNames.
// Ejercicios: Nivel 3
// Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
// Lee la api de países y descubre los 10 países más grandes
// Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const paises = async (paises) => {
  try {
    const jspaises = await fetch(paises);
    const data = await jspaises.json();
    //console.log(data);
    bigPaises(data)
    filtrar(data);
  } catch (error) {
    console.error(error);
  }
};

const cats = async (gatos) => {
  try {
    const Dgatos = await fetch(gatos);
    const data = await Dgatos.json();
    //console.log(data)
    catNames(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const pesoCats = async (gatos) => {
  try {
    const Dgatos = await fetch(gatos);
    const data = await Dgatos.json();
    //console.log(data);
    pesoMedio(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

function filtrar(data) {
  const Fpaises = Object.entries(data).map(([clave, valo]) => ({
    nombre: valo.name,
    capital: valo.capital,
    idiomas: valo.languages,
    poblacion: valo.population,
    superficie: valo.area,
  }));
  console.log(Fpaises);
}

function pesoMedio(cats) {
  let cant = cats.length;
  //console.log(cant)
  let peso = Object.entries(cats)
  .map(([clave, valor]) => ({
    Peso: valor.weight.metric,
  }))
  .map((peso)=> peso.Peso.split('-'))
  .map(([num1, num2]) => {
    let valor1 = parseInt(num1.trim());
    let valor2 = parseInt(num2.trim());
    return (valor1 + valor2) / 2;
  })
  .reduce((a,b)=>(a+b),0)
  let promedio = peso/cant
  console.log(promedio.toFixed(2))
  //console.log(peso)
}

function bigPaises (data){
  let bpaises = Object.entries(data).map(([clave,value])=>({
    Nombre:value.name,Tamaño:value.area
  })).sort((a,b)=>b.Tamaño-a.Tamaño).slice(0,10)
 console.log(bpaises)
}

const catNames = (catsapi) => {
  const names = Object.entries(catsapi).map(([clave, valo]) => ({
    Nombre: valo.name,
  }));
  console.log(names);
};

paises(countriesAPI)
cats(catsAPI);
pesoCats(catsAPI);
