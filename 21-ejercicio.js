// FizzBuzz extendido

// Escribe una función que reciba un número y devuelva "Fizz" si es divisible por 3,
//  "Buzz" si es divisible por 5, "FizzBuzz" si es divisible por ambos, y el número en caso contrario. 
//  Extiende la función para que también devuelva "Pop" si es divisible por 7.

let fizzBuzz = (num)=>{
    let result = "";
    if (num % 3 === 0) result += "Fizz";
    if (num % 5 === 0) result += "Buzz";
    if (num % 7 === 0) result += "Pop";
    return result || num;
}

console.log(fizzBuzz(3));  // Output: Fizz
console.log(fizzBuzz(5));  // Output: Buzz
console.log(fizzBuzz(7));  // Output: Pop
console.log(fizzBuzz(15)); // Output: FizzBuzz
console.log(fizzBuzz(21)); // Output: FizzPop
console.log(fizzBuzz(35)); // Output: BuzzPop
console.log(fizzBuzz(105)); // Output: FizzBuzzPop
console.log(fizzBuzz(8));  // Output: 8