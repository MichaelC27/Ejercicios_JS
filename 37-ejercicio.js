// Crea una clase llamada PersonAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome,
// totalExpense, accountInfo,addIncome, addExpense y accountBalance.
// Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.

class PersonAccount {
    constructor(nombre, apellido, ingresos = [], gastos = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ingresos = ingresos; // Ingresos como un array para manejar múltiples entradas
        this.gastos = gastos; // Gastos como un array para manejar múltiples entradas
    }

    // Método para calcular el total de ingresos
    totalIncome() {
        return this.ingresos.reduce((total, ingreso) => total + ingreso, 0);
    }

    // Método para calcular el total de gastos
    totalExpense() {
        return this.gastos.reduce((total, gasto) => total + gasto, 0);
    }

    // Método para mostrar la información de la cuenta
    accountInfo() {
        return `El nombre es ${this.nombre} ${this.apellido}, sus ingresos son ${this.ingresos.join(", ")} y sus gastos ${this.gastos.join(", ")}`;
    }

    // Método para añadir un nuevo gasto
    addExpense(nuevoGasto) {
        this.gastos.push(nuevoGasto);
    }

    // Método para calcular el balance de la cuenta
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}


const persona = new PersonAccount("Michael", "Cordones", 0, 1000);
persona.addExpense(23)
persona.addExpense(23)
persona.addExpense(23)
persona.addExpense(23)

console.log(persona.accountInfo());
