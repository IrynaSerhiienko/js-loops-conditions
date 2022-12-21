console.log("**********Minimum-5***********");
/* Запитай у користувача число і виведи всі дільники цього числа. */

let number = +prompt("Hi, Enter number, pl", 12);

if (number > 0) {
  for (let i = 1; i <= number; i++) {
    if(number % i === 0) {
        console.log(i); 
    } 
  }
} else console.log("Error!");
