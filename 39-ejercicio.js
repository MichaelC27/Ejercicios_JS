//Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.

// const countriesAPI = "https://restcountries.com/v2/all";
// fetch(countriesAPI)
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// Imprime todos los nombres de los gatos en la variable catNames.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const cat_Names = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catNames = cats.map(cat => {
      return cat.name;
    })
    console.log(catNames);
  } catch (error) {
    console.log(error);
  }
};

cat_Names();
