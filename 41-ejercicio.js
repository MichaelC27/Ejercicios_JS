// Ejercicios: Nivel 1
// Crear una closure que tenga una función interna
// Ejercicios: Nivel 2
// Crear una closure que tenga tres funciones internas
// Ejercicios: Nivel 3
// Crear una función de salida de personAccount.
// Tiene variables internas de nombre, apellido, ingresos y gastos. Tiene las funciones internas
// totalIncome, totalExpense, accountInfo,addIncome, addExpense
// y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos con su descripción.

function exFun() {
  let cont = 0;
  function inf1() {
    cont++;
    return cont;
  }
  function inf2() {
    cont++;
    return cont;
  }
  function inf3() {
    cont++;
    return cont;
  }
  return {
    inf1: inf1(),
    inf2: inf2(),
    inf3: inf3(),
  };
}

const llamado = exFun();
console.log(llamado.inf1);
console.log(llamado.inf2);
console.log(llamado.inf3);

//Ejercicio #3

function personAccount() {
  let nombre = "Michael";
  let apellido = "Cordones";
  let ingresos = [100, 231, 2301, 1231, 10231, 2311, 231];
  let gastos = [231, 2312, 999, 231];

  function totalIncome() {
    let total = ingresos.reduce((valueP, valueV) => valueP + valueV, 0);
    return total;
  }
  function totalExpense() {
    let total = gastos.reduce((valueP, valueV) => valueP + valueV, 0);
    return total;
  }
  function accountInfo() {
    return `EL nombre de la persona es ${nombre} ${apellido} y sus ingesos son ${totalIncome()}, y sus gastos ${totalExpense()}`;
  }
  function addIncome(ingre) {
    return ingresos.push(ingre)
  }
  function addExpense(gas) {
    return gastos.push(gas)
  }
  function accountBalance(){
    return `El balance de la cuenta es:${totalIncome() - totalExpense()}`
  }
  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    accountInfo: accountInfo,
    addIncome:addIncome,
    addExpense:addExpense,
    accountBalance:accountBalance
  };
}

const persona = personAccount();
console.log(persona.totalIncome());
console.log(persona.totalExpense());
console.log(persona.accountInfo());
persona.addIncome(223)
console.log(persona.totalIncome());
persona.addExpense(1000)
console.log(persona.totalExpense());
console.log(persona.accountBalance())
