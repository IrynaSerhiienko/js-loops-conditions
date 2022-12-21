console.log("**********Minimum-3***********");
/* Підрахуй суму всіх чисел в заданому користувачем діапазоні. */

let x = +prompt("Hi! Enter lesser number", 0);
let y = +prompt("Hi! Enter bigger number", 3);
let sum = 0;

while (x <= y) {
    sum += x;
    x++;
}

alert(`The sum of the range of numbers is equal: ${sum}`);
console.log(`The sum of the range of numbers is equal: ${sum}`);

