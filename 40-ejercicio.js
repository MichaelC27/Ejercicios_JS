// Ejercicios: Nivel 3
// Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
// Lee la api de países y descubre los 10 países más grandes
// Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const pesoMediano = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    // Extraer los pesos en formato imperial
    const catPeso = cats.map(cat => cat.weight.imperial);
    
    // Función para calcular el promedio de un rango
    const averageRange = (range) => {
      const [min, max] = range.split(' - ').map(Number);
      return (min + max) / 2;
    };

    // Calcular los promedios de cada rango
    const averages = catPeso.map(averageRange);

    // Calcular el promedio total
    const totalAverage = averages.reduce((sum, avg) => sum + avg, 0) / averages.length;

    // Mostrar resultados
    console.log('Promedios de cada rango:', averages);
    console.log('Promedio total:', totalAverage);
    console.log('Total de gatos:', cats.length);
  
  } catch (error) {
    console.log(error);
  }
};

//pesoMediano();


const paises = async ()=>{
  try{
    const response = await fetch(countriesAPI)
    const data = await response.json()
    let areas = data.map((area)=>({Pais:area.name,Area:area.area})).sort((a,b)=>b.Area-a.Area).slice(0,10)
    console.log(areas)
  }catch(error){
    console.error(error)
  }

}
///paises()


const lenguasPaises = async ()=>{
  try{
    const reponse = await fetch(countriesAPI)
    const data = await reponse.json()
    let lenguas = data.map((data) => data.languages)
    console.log(lenguas.length)
  }catch(error){
    console.error(error)
  }
}
lenguasPaises()